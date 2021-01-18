import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Container,
  Pages,
  MainTitle,
  Markdown,
  WrapButtons,
  WrapButtonLead,
  WrapStepCalculator,
  ContentStepCards,
  LoadingImage,
  LoadingContent,
  RadioWrap,
  Result,
  Fieldset,
} from "./styles";
import { api } from "../../services/api";
import { getValidationErrors } from "../../utils/getValidationErrors";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Decimal } from "decimal.js";
import CalculatorImage from "../../assets/img/calculator.png";
import FormCheck from "../../assets/img/form-check.png";

import Input from "../../components/ferramenta/input";
import ProgressBar from "../../components/ferramenta/progressBar";
import Button from "../../components/ferramenta/button";
import StepCards from "../../components/ferramenta/stepCards";

import { GlobalContext } from "../../hooks/GlobalContext";
import RadioButton from "../../components/ferramenta/radioButton";

const Calculator = () => {
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    ted: 0,
    saque: 0,
    boleto: 0,
  });

  const [isSubmited, setIsSubmited] = useState("");
  const [totalOperation, setTotalOperation] = useState(0);

  const { progressBar, setProgressBar } = useContext(GlobalContext);

  const pagesRef = useRef();
  const formRef = useRef();

  const radioOptions = [
    { id: "sim", value: "sim", label: "Sim" },
    { id: "nao", value: "não", label: "Não" },
  ];

  const SimplesCalculator = {
    simples: {
      manutencao: {
        valor: 0,
      },
      saques: {
        valor: 4.99,
      },
      boletos: {
        valor: 2.89,
        gratuitos: 2,
      },
      teds: {
        valor: 2.99,
      },
    },
    bancos: {
      manutencao: {
        valor: 19.9,
      },
      saques: {
        valor: 12,
      },
      boletos: {
        valor: 5,
        gratuitos: 0,
      },
      teds: {
        valor: 10.5,
      },
    },
  };

  let progressBarValue = 0;

  useEffect(() => {
    const pagesList = pagesRef.current.children;
    const isSubmited = localStorage.getItem("@isSubmited");

    setIsSubmited(isSubmited);

    setPages(pagesList);

    pagesRef.current.children[currentPage].style.display = "flex";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const porcentagemValue = 100 / (pages.length - 4);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    progressBarValue = porcentagemValue + progressBarValue;
    setProgressBar(progressBarValue);
  }, [pages, form]);

  const calculate = (ted, saque, boleto) => {
    if (calculateSavings(ted, saque, boleto) < 0) {
      setTotalOperation(
        (calculateSavings(ted, saque, boleto) * -1).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    }
  };

  const calculateSavings = (teds, saques, boletos) => {
    const totalGrandesBancos = new Decimal(0)
      .add(new Decimal(SimplesCalculator.bancos.manutencao.valor))
      .add(new Decimal(SimplesCalculator.bancos.boletos.valor).times(boletos))
      .add(new Decimal(SimplesCalculator.bancos.saques.valor).times(saques))
      .add(new Decimal(SimplesCalculator.bancos.teds.valor).times(teds));

    const numBoletos =
      boletos - SimplesCalculator.simples.boletos.gratuitos <= 0
        ? 0
        : boletos - SimplesCalculator.simples.boletos.gratuitos;

    const totalSimples = new Decimal(0)
      .add(new Decimal(SimplesCalculator.simples.manutencao.valor))
      .add(new Decimal(SimplesCalculator.simples.saques.valor).times(saques))
      .add(new Decimal(SimplesCalculator.simples.teds.valor).times(teds))
      .add(
        new Decimal(SimplesCalculator.simples.boletos.valor).times(numBoletos)
      );

    return Number(totalSimples.minus(totalGrandesBancos).times(12).toString());
  };

  const handleStep = async () => {
    let numberUpdated = 0;

    if (currentPage < pages.length - 1) {
      numberUpdated = currentPage + 1;
      setCurrentPage(numberUpdated);
      if (
        pagesRef.current.children[numberUpdated].innerText.includes(
          "Calculando"
        )
      ) {
        if (isSubmited) {
          calculate();
          setTimeout(() => {
            pagesRef.current.children[numberUpdated + 2].style.display = "flex";
            if (numberUpdated !== 0) {
              pagesRef.current.children[numberUpdated].style.display = "none";
            }
          }, 2000);
        } else {
          setTimeout(() => {
            pagesRef.current.children[numberUpdated + 1].style.display = "flex";
            if (numberUpdated !== 0) {
              pagesRef.current.children[numberUpdated].style.display = "none";
            }
          }, 2000);
        }
      }
      if (
        pagesRef.current.children[numberUpdated].innerText.includes("e-mail")
      ) {
        pagesRef.current.children[numberUpdated + 1].style.display = "flex";
        if (numberUpdated !== 0) {
          pagesRef.current.children[numberUpdated].style.display = "none";
          return;
        }
      }
    }
    pagesRef.current.children[numberUpdated].style.display = "flex";
    if (numberUpdated !== 0) {
      pagesRef.current.children[numberUpdated - 1].style.display = "none";
    }
  };

  const handleBackStep = () => {
    let numberUpdated = 0;

    if (currentPage >= 0) {
      numberUpdated = currentPage - 1;
      pagesRef.current.children[numberUpdated + 1].style.display = "none";

      pagesRef.current.children[numberUpdated].style.display = "flex";
      setCurrentPage(numberUpdated);
    }
  };

  const handleReturnBackStep = () => {
    let numberUpdated = 0;

    if (currentPage >= 0) {
      numberUpdated = currentPage - 1;
      pagesRef.current.children[numberUpdated + 1].style.display = "none";

      const porcentagemValue = 100 / (pages.length - 4);
      setProgressBar(progressBar - porcentagemValue);

      pagesRef.current.children[numberUpdated].style.display = "flex";
      setCurrentPage(numberUpdated);
    }
  };

  const handleSubmit = async (data, { reset }) => {
    console.log(data);
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        cnpj: Yup.string().required("Selecione uma opção"),
      });

      setLoading(true);

      await schema.validate(data, {
        abortEarly: false,
      });

      api
        .post("/send", {
          name: data.name,
          email: data.email,
          cnpj: data.cnpj,
        })
        .then(function (response) {
          if (response.status === 200) {
            console.log(response);
            setLoading(false);
            localStorage.setItem("@isSubmited", "yes");
            console.log("enviado!!!!");
            reset();
            handleStep();

            if (calculateSavings(form.ted, form.saque, form.boleto) < 0) {
              setTotalOperation(
                (
                  calculateSavings(form.ted, form.saque, form.boleto) * -1
                ).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              );
            }
          }
        })

        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current.setErrors(errors);
      console.log(err.inner);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} autocomplete="off">
        <Pages ref={pagesRef}>
          <StepCards>
            <ContentStepCards>
              <img src={CalculatorImage} alt="Ilustração de uma calculadora" />

              <WrapStepCalculator>
                <MainTitle>
                  Seja simples e<br /> <Markdown>economize!</Markdown>
                </MainTitle>
                <p>
                  Que os grandes bancos cobram altas tarifas sobre os serviços
                  oferecidos você já sabe.
                </p>
                <br />
                <p>
                  Mas você já parou para pensar no quanto isso representa ao
                  longo de um ano?
                </p>
                <br />
                <p>
                  Foi para isso que nós da Conta Simples fizemos essa
                  calculadora.{" "}
                  <b>
                    Descubra o quanto seu negócio pode economizar com tarifas
                    anualmente
                  </b>
                  .
                </p>

                <Button type="button" onClick={handleStep}>
                  COMEÇAR
                </Button>
              </WrapStepCalculator>
            </ContentStepCards>
          </StepCards>
          <StepCards>
            <ProgressBar />
            <MainTitle>
              Quantas <Markdown>TED'S </Markdown> Você faz em
              <br /> média por mês?
            </MainTitle>
            <Input
              type="number"
              id="ted"
              name="teds"
              label="Digite o número de TEDs"
            />
            <WrapButtons>
              <Button type="button" onClick={handleBackStep}>
                VOLTAR
              </Button>
              <Button
                type="button"
                onClick={async ({ target }) => {
                  try {
                    let formData = {
                      teds:
                        target.parentNode.parentNode.children[2].children[0]
                          .value,
                    };
                    console.log(formData);
                    formRef.current?.setErrors({});

                    const schema = Yup.object().shape({
                      teds: Yup.number()
                        .typeError("Preencha um valor válido")
                        .required("Campo obrigatório"),
                    });

                    await schema.validate(formData, {
                      abortEarly: false,
                    });

                    setForm({
                      ...form,
                      ted: formData.teds,
                    });

                    console.log(form);

                    let numberUpdated = 0;

                    if (currentPage < pages.length - 1) {
                      numberUpdated = currentPage + 1;
                      setCurrentPage(numberUpdated);
                    }

                    const porcentagemValue = 100 / (pages.length - 4);
                    setProgressBar(porcentagemValue + progressBar);

                    pagesRef.current.children[numberUpdated].style.display =
                      "flex";
                    if (numberUpdated !== 0) {
                      pagesRef.current.children[
                        numberUpdated - 1
                      ].style.display = "none";
                    }
                  } catch (err) {
                    const errors = getValidationErrors(err);
                    formRef.current.setErrors(errors);
                    console.log(err);
                    if (err) console.log(err.inner);
                  }
                }}
              >
                AVANÇAR
              </Button>
            </WrapButtons>
          </StepCards>
          <StepCards>
            <ProgressBar />
            <MainTitle>
              Quantos <Markdown>saques</Markdown> você faz em
              <br /> média por mês?
            </MainTitle>
            <Input
              type="number"
              id="saque"
              name="saques"
              label="Digite o número de saques"
            />
            <WrapButtons>
              <Button type="button" onClick={handleReturnBackStep}>
                VOLTAR
              </Button>
              <Button
                type="button"
                onClick={async ({ target }) => {
                  try {
                    let formData = {
                      saques:
                        target.parentNode.parentNode.children[2].children[0]
                          .value,
                    };
                    console.log(formData);
                    formRef.current?.setErrors({});

                    const schema = Yup.object().shape({
                      saques: Yup.number()
                        .typeError("Preencha um valor válido")
                        .positive("Preencha um valor válido")
                        .required("Campo obrigatório"),
                    });

                    await schema.validate(formData, {
                      abortEarly: false,
                    });

                    setForm({
                      ...form,
                      saque: formData.saques,
                    });

                    console.log(form);

                    let numberUpdated = 0;

                    if (currentPage < pages.length - 1) {
                      numberUpdated = currentPage + 1;
                      setCurrentPage(numberUpdated);
                    }

                    const porcentagemValue = 100 / (pages.length - 4);
                    setProgressBar(porcentagemValue + progressBar);

                    pagesRef.current.children[numberUpdated].style.display =
                      "flex";
                    if (numberUpdated !== 0) {
                      pagesRef.current.children[
                        numberUpdated - 1
                      ].style.display = "none";
                    }
                  } catch (err) {
                    const errors = getValidationErrors(err);
                    formRef.current.setErrors(errors);
                    console.log(err);
                    if (err) console.log(err.inner);
                  }
                }}
              >
                AVANÇAR
              </Button>
            </WrapButtons>
          </StepCards>
          <StepCards>
            <ProgressBar />
            <MainTitle>
              Quantos <Markdown>boletos</Markdown> você usa em
              <br /> média por mês?
            </MainTitle>
            <Input
              type="number"
              id="boleto"
              name="boletos"
              label="Digite o número de boletos"
            />

            <WrapButtons>
              <Button type="button" onClick={handleReturnBackStep}>
                VOLTAR
              </Button>
              <Button
                type="button"
                onClick={async ({ target }) => {
                  let numberUpdated = 0;

                  try {
                    let formData = {
                      boletos:
                        target.parentNode.parentNode.children[2].children[0]
                          .value,
                    };
                    console.log(typeof Number(formData.boletos));
                    formRef.current?.setErrors({});
                    const schema = Yup.object().shape({
                      boletos: Yup.number()
                        .typeError("Preencha um valor válido")
                        .positive("Preencha um valor válido")
                        .required("Campo obrigatório"),
                    });
                    await schema.validate(formData, {
                      abortEarly: false,
                    });

                    setForm({
                      ...form,
                      boleto: formData.boletos,
                    });

                    console.log(form);

                    if (currentPage < pages.length - 1) {
                      numberUpdated = currentPage + 1;
                      setCurrentPage(numberUpdated);

                      if (
                        pagesRef.current.children[
                          numberUpdated
                        ].innerText.includes("Calculando")
                      ) {
                        if (isSubmited) {
                          setForm((state) => {
                            calculate(state.ted, state.saque, state.boleto);

                            return state;
                          });

                          setTimeout(() => {
                            pagesRef.current.children[
                              numberUpdated + 2
                            ].style.display = "flex";

                            if (numberUpdated !== 0) {
                              pagesRef.current.children[
                                numberUpdated
                              ].style.display = "none";
                            }
                          }, 2000);
                        } else {
                          setTimeout(() => {
                            pagesRef.current.children[
                              numberUpdated + 1
                            ].style.display = "flex";

                            if (numberUpdated !== 0) {
                              pagesRef.current.children[
                                numberUpdated
                              ].style.display = "none";
                            }
                          }, 2000);
                        }
                      }

                      if (
                        pagesRef.current.children[
                          numberUpdated
                        ].innerText.includes("e-mail")
                      ) {
                        pagesRef.current.children[
                          numberUpdated + 1
                        ].style.display = "flex";

                        if (numberUpdated !== 0) {
                          pagesRef.current.children[
                            numberUpdated
                          ].style.display = "none";

                          return;
                        }
                      }
                    }

                    pagesRef.current.children[numberUpdated].style.display =
                      "flex";

                    if (numberUpdated !== 0) {
                      pagesRef.current.children[
                        numberUpdated - 1
                      ].style.display = "none";
                    }
                  } catch (err) {
                    const errors = getValidationErrors(err);
                    formRef.current.setErrors(errors);
                    console.log(err);
                    if (err) console.log(err.inner);
                  }
                }}
              >
                AVANÇAR
              </Button>
            </WrapButtons>
          </StepCards>
          <StepCards>
            <LoadingContent>
              <LoadingImage
                width="auto"
                height="62"
                viewBox="0 0 84 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="simple-left"
                  d="M25.8629 0.926895C24.5956 -0.321922 22.5558 -0.306934 21.307 0.960371L0.926897 21.6422C-0.32192 22.9095 -0.306935 24.9492 0.96037 26.198L6.37957 31.5382L21.5205 46.6791C22.7786 47.9372 24.8184 47.9372 26.0765 46.6791L32.1237 40.6319C33.3818 39.3738 33.3818 37.3341 32.1237 36.076L21.7461 25.6984C20.651 24.6032 20.6444 22.8297 21.7315 21.7266L31.9044 11.4031C33.1532 10.1358 33.1382 8.09609 31.8709 6.84727L25.8629 0.926895Z"
                  fill="#45B34A"
                />
                <path
                  className="simple-right"
                  d="M57.3475 60.6841C58.6409 61.9163 60.6962 61.8746 61.9382 60.5911L82.2077 39.6444C83.4497 38.3609 83.4081 36.3215 82.1148 35.0894L76.5844 29.8206L61.1297 14.879C59.8456 13.6374 57.79 13.6641 56.5385 14.9386L50.523 21.0643C49.2715 22.3388 49.2979 24.3784 50.5821 25.6199L61.1669 35.8533C62.2865 36.9358 62.3162 38.721 61.2332 39.8401L51.1233 50.2878C49.8813 51.5714 49.9229 53.6107 51.2162 54.8428L57.3475 60.6841Z"
                  fill="black"
                />
              </LoadingImage>

              <MainTitle>
                Calculando sua
                <br /> <Markdown>economia</Markdown>
              </MainTitle>
            </LoadingContent>
          </StepCards>
          <StepCards>
            <ContentStepCards>
              <img src={FormCheck} alt="Imagem de envelope" />
              <div>
                <MainTitle>
                  Estamos a um passo do <br />
                  seu <Markdown>resultado</Markdown>!
                </MainTitle>
                <Input
                  type="name"
                  id="name"
                  name="name"
                  label="Digite o seu nome"
                />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Digite o seu e-mail"
                />
                <RadioWrap>
                  <h4>Possui CNPJ?</h4>

                  <Fieldset id="cnpj" name="cnpj">
                    <RadioButton name="cnpj" options={radioOptions} />
                  </Fieldset>
                </RadioWrap>

                <WrapButtonLead>
                  {loading ? (
                    <Button>FINALIZANDO...</Button>
                  ) : (
                    <Button>VER RESULTADO</Button>
                  )}
                </WrapButtonLead>
              </div>
            </ContentStepCards>
          </StepCards>
          <StepCards>
            <MainTitle>
              Com a <Markdown>Conta Simples </Markdown> você <br /> economiza
              por ano:
            </MainTitle>
            <Result>
              <span>
                <small>
                  <Markdown>R$</Markdown>
                </small>
                {totalOperation}
              </span>
              <p>
                *O cálculo foi baseado na média de tarifas praticadas pelos
                grandes bancos
              </p>
            </Result>

            <WrapButtons>
              <Button
                type="button"
                onClick={() => (window.location.href = "/calculator")}
              >
                REFAZER SIMULAÇÃO
              </Button>

              <Button
                type="button"
                onClick={() =>
                  (window.location.href =
                    "https://onboarding.contasimples.com/")
                }
              >
                ABRA SUA CONTA AGORA
              </Button>
            </WrapButtons>
          </StepCards>
        </Pages>
      </Form>
    </Container>
  );
};

export default Calculator;
