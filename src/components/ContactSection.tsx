import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Info, RotateCcw } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  accommodationName: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  accommodationName?: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  accommodationName: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = 'Informe seu nome.';
    } else if (data.name.trim().length < 2) {
      nextErrors.name = 'Digite ao menos 2 caracteres para o nome.';
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Informe um endereço de e-mail.';
    } else if (!EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Digite um e-mail válido (ex.: contato@pousada.com.br).';
    }

    if (!data.accommodationName.trim()) {
      nextErrors.accommodationName = 'Informe o nome da sua hospedagem.';
    } else if (data.accommodationName.trim().length < 2) {
      nextErrors.accommodationName = 'Digite ao menos 2 caracteres para a hospedagem.';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Front-end conceptual demonstration only: no network call or persistence.
    setSubmittedData({
      name: values.name.trim(),
      email: values.email.trim(),
      accommodationName: values.accommodationName.trim(),
    });
    setErrors({});
  };

  const handleReset = () => {
    setSubmittedData(null);
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  return (
    <section id="contato" className="bg-[#f5f5f7] py-24 sm:py-32">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="sk-body-lg text-[#6e6e73] font-medium mb-2">
            Contato
          </p>
          <h2 className="sk-h2 text-[32px] sm:text-[40px] text-[#1d1d1f] mb-4">
            Conheça o hotevo mais de perto.
          </h2>
          <p className="sk-body-lg text-[#6e6e73] max-w-xl mx-auto">
            Deixe os dados da sua hospedagem para visualizar o fluxo conceitual de solicitação de
            informações.
          </p>
        </div>

        <div className="bg-white rounded-[18px] p-6 sm:p-10">
          {submittedData ? (
            <div role="status" aria-live="polite" className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="sk-h4 text-[#1d1d1f] mb-3">
                Solicitação registrada localmente
              </h3>
              <p className="sk-body-lg text-[#6e6e73] max-w-lg mx-auto mb-7">
                Obrigado, <strong className="font-semibold text-[#1d1d1f]">{submittedData.name}</strong>.
                Em uma versão conectada, as informações sobre{' '}
                <strong className="font-semibold text-[#1d1d1f]">
                  {submittedData.accommodationName}
                </strong>{' '}
                ({submittedData.email}) seriam enviadas para atendimento. Nenhum dado foi transmitido
                ou armazenado neste protótipo front-end.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 sk-body-lg text-[#0066cc] hover:underline underline-offset-4 py-2 px-3 rounded-[12px]"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>Preencher novamente</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="rounded-[12px] bg-[#f5f5f7] px-4 py-3.5 sk-body-sm text-[#424245] flex items-start gap-2.5">
                <Info
                  className="w-4 h-4 text-[#0066cc] shrink-0 mt-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p>
                  <strong className="font-semibold text-[#1d1d1f]">
                    Protótipo conceitual de front-end:
                  </strong>{' '}
                  este formulário valida os campos localmente e exibe uma confirmação na tela, sem
                  enviar nem armazenar os dados preenchidos.
                </p>
              </div>

              {/* Field: Nome */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block sk-body-md font-medium text-[#1d1d1f] mb-1.5"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={handleChange('name')}
                  placeholder="Ex.: Ana Paula Mendes"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-[12px] border sk-body-lg text-[#1d1d1f] placeholder:text-[#86868b] bg-white transition-colors duration-150 ${
                    errors.name
                      ? 'border-[#b64400] focus-visible:outline-[#b64400]'
                      : 'border-[#d2d2d7] hover:border-[#86868b]'
                  }`}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-1.5 sk-body-sm font-medium text-[#b64400] flex items-center gap-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field: E-mail */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block sk-body-md font-medium text-[#1d1d1f] mb-1.5"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange('email')}
                  placeholder="Ex.: contato@suapousada.com.br"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-[12px] border sk-body-lg text-[#1d1d1f] placeholder:text-[#86868b] bg-white transition-colors duration-150 ${
                    errors.email
                      ? 'border-[#b64400] focus-visible:outline-[#b64400]'
                      : 'border-[#d2d2d7] hover:border-[#86868b]'
                  }`}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-1.5 sk-body-sm font-medium text-[#b64400] flex items-center gap-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Field: Nome da hospedagem */}
              <div>
                <label
                  htmlFor="contact-accommodation"
                  className="block sk-body-md font-medium text-[#1d1d1f] mb-1.5"
                >
                  Nome da hospedagem
                </label>
                <input
                  id="contact-accommodation"
                  name="accommodationName"
                  type="text"
                  required
                  value={values.accommodationName}
                  onChange={handleChange('accommodationName')}
                  placeholder="Ex.: Pousada Vista Serena"
                  aria-invalid={Boolean(errors.accommodationName)}
                  aria-describedby={
                    errors.accommodationName ? 'contact-accommodation-error' : undefined
                  }
                  className={`w-full min-h-[48px] px-4 py-3 rounded-[12px] border sk-body-lg text-[#1d1d1f] placeholder:text-[#86868b] bg-white transition-colors duration-150 ${
                    errors.accommodationName
                      ? 'border-[#b64400] focus-visible:outline-[#b64400]'
                      : 'border-[#d2d2d7] hover:border-[#86868b]'
                  }`}
                />
                {errors.accommodationName && (
                  <p
                    id="contact-accommodation-error"
                    className="mt-1.5 sk-body-sm font-medium text-[#b64400] flex items-center gap-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.accommodationName}</span>
                  </p>
                )}
              </div>

              <div className="pt-3 flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[46px] sk-button-primary sk-button-elevated"
                >
                  Solicitar informações
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
