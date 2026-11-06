import React, { useState } from 'react';
import { X, Check, QrCode, Shield, Download, ArrowRight, ArrowLeft, Copy, CheckCircle2, Bike } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  isTeamDefault?: boolean;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'elite-varones',
  isTeamDefault = false,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isTeam, setIsTeam] = useState(isTeamDefault);
  const [category, setCategory] = useState(defaultCategory);

  // Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    documentId: '',
    email: '',
    phone: '',
    city: 'La Paz',
    teamName: '',
    bloodType: 'O+',
    emergencyContact: '',
    emergencyPhone: '',
    acceptedTerms: true,
  });

  const [copiedBank, setCopiedBank] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  if (!isOpen) return null;

  const costBOB = isTeam ? EVENT_DATA.pricing.teamBOB : EVENT_DATA.pricing.individualBOB;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.documentId || !formData.phone) {
      alert('Por favor completa los campos obligatorios (Nombre, Documento y Teléfono)');
      return;
    }
    setStep(2);
  };

  const handleConfirmRegistration = () => {
    // Generate realistic bib number
    const randomBib = Math.floor(100 + Math.random() * 899);
    setTicketNumber(`HPT-2026-${randomBib}`);
    setStep(3);
  };

  const copyBankInfo = () => {
    navigator.clipboard.writeText(
      'Banco Nacional de Bolivia (BNB) | Cuenta Nro. 1504644401 | Titular: MTB Rodadas La Paz | Referencia: Nombre del Competidor'
    );
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0f141f] border border-slate-800 rounded-xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-[#0a0d14]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Bike className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase text-white tracking-wide">
                Inscripción Oficial Desafío Huayna Potosí
              </h3>
              <div className="text-[11px] text-slate-400">
                Paso {step} de 3 · {step === 1 ? 'Ficha de Atleta' : step === 2 ? 'Método de Pago QR' : 'Acreditación Confirmada'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* STEP 1: ATHLETE INFORMATION */}
          {step === 1 && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              {/* Registration Type Toggle */}
              <div className="flex gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsTeam(false)}
                  className={`flex-1 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    !isTeam
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Individual (130 BOB)
                </button>
                <button
                  type="button"
                  onClick={() => setIsTeam(true)}
                  className={`flex-1 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                    isTeam
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Equipo 10 + 1 (1.300 BOB)
                </button>
              </div>

              {/* Category Selector */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 block">
                  Categoría de Competición *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {EVENT_DATA.categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — {c.ageRange} ({c.gender})
                    </option>
                  ))}
                </select>
              </div>

              {/* Two columns inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Nombre Completo del Corredor / Capitán *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mamani Ramos"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Cédula de Identidad / Pasaporte *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 6894321 LP"
                    value={formData.documentId}
                    onChange={(e) => setFormData({ ...formData, documentId: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ciclista@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +591 76543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Ciudad / País de Origen
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. La Paz, Cochabamba, Arequipa"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300 block">
                    Club / Equipo (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. MTB Los Andes Racing"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Medical & Emergency Contact Fields */}
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Datos de Emergencia para Bomberos Santa Bárbara
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-300 block">Grupo Sanguíneo</label>
                    <select
                      value={formData.bloodType}
                      onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                    >
                      <option value="O+">O Rh Positivo (O+)</option>
                      <option value="O-">O Rh Negativo (O-)</option>
                      <option value="A+">A Rh Positivo (A+)</option>
                      <option value="A-">A Rh Negativo (A-)</option>
                      <option value="B+">B Rh Positivo (B+)</option>
                      <option value="AB+">AB Rh Positivo (AB+)</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] text-slate-300 block">
                      Contacto de Emergencia & Parentesco
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. María Ramos (Esposa) - Cel: 71234567"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Total & Action */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div>
                  <div className="text-xs text-slate-400">Total a Pagar:</div>
                  <div className="font-['JetBrains_Mono'] text-2xl font-bold text-amber-400">
                    {costBOB} <span className="text-xs font-sans text-slate-300">BOB</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  Continuar al Pago
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: PAYMENT & QR SIMPLE */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    <QrCode className="w-4 h-4" />
                    Pago Digital QR Simple Interbancario
                  </div>
                  <div className="text-xs font-['JetBrains_Mono'] text-white">
                    Monto: <strong className="text-amber-400">{costBOB} BOB</strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Generated QR Representation */}
                  <div className="sm:col-span-5 flex flex-col items-center">
                    <div className="bg-white p-3 rounded-lg shadow-md border border-slate-200">
                      {/* High quality clean SVG QR Code */}
                      <svg viewBox="0 0 100 100" className="w-40 h-40">
                        {/* Corner markers */}
                        <rect x="5" y="5" width="25" height="25" fill="#000" />
                        <rect x="9" y="9" width="17" height="17" fill="#fff" />
                        <rect x="13" y="13" width="9" height="9" fill="#000" />

                        <rect x="70" y="5" width="25" height="25" fill="#000" />
                        <rect x="74" y="9" width="17" height="17" fill="#fff" />
                        <rect x="78" y="13" width="9" height="9" fill="#000" />

                        <rect x="5" y="70" width="25" height="25" fill="#000" />
                        <rect x="9" y="74" width="17" height="17" fill="#fff" />
                        <rect x="13" y="78" width="9" height="9" fill="#000" />

                        {/* QR pattern dots */}
                        <rect x="36" y="8" width="5" height="5" fill="#000" />
                        <rect x="45" y="8" width="5" height="15" fill="#000" />
                        <rect x="55" y="12" width="8" height="5" fill="#000" />
                        <rect x="36" y="25" width="25" height="5" fill="#000" />
                        <rect x="10" y="38" width="15" height="6" fill="#000" />
                        <rect x="32" y="38" width="8" height="8" fill="#000" />
                        <rect x="48" y="36" width="14" height="6" fill="#000" />
                        <rect x="70" y="36" width="22" height="6" fill="#000" />
                        <rect x="8" y="50" width="8" height="8" fill="#000" />
                        <rect x="24" y="52" width="12" height="6" fill="#000" />
                        <rect x="44" y="50" width="18" height="10" fill="#000" />
                        <rect x="72" y="50" width="18" height="8" fill="#000" />
                        <rect x="36" y="68" width="12" height="8" fill="#000" />
                        <rect x="55" y="68" width="10" height="15" fill="#000" />
                        <rect x="75" y="68" width="18" height="10" fill="#000" />
                        <rect x="36" y="82" width="15" height="8" fill="#000" />
                        <rect x="70" y="85" width="20" height="6" fill="#000" />
                      </svg>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2 text-center">
                      Escanea desde cualquier app bancaria de Bolivia (QR Simple)
                    </div>
                  </div>

                    {/* Bank Account Details */}
                    <div className="sm:col-span-7 space-y-2 text-xs text-slate-300">
                      <div className="bg-slate-950 p-3 rounded border border-slate-800 space-y-1.5">
                        <div className="text-[11px] text-slate-400 uppercase font-medium">
                          Cuenta Oficial de Depósito:
                        </div>
                        <div>
                          <strong>Entidad Financiera:</strong> Banco Nacional de Bolivia (BNB)
                        </div>
                        <div>
                          <strong>Nro. de Cuenta:</strong>{' '}
                          <span className="font-['JetBrains_Mono'] text-amber-400 font-bold">1504644401</span>
                        </div>
                        <div>
                          <strong>Titular:</strong> Club MTB Rodadas La Paz
                        </div>
                        <div>
                          <strong>Concepto / Glosa:</strong> {formData.fullName ? formData.fullName : 'Nombre del Competidor'}
                        </div>
                      </div>

                    <button
                      type="button"
                      onClick={copyBankInfo}
                      className="w-full py-1.5 text-[11px] font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedBank ? '¡Datos bancarios copiados!' : 'Copiar datos de cuenta'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Reference verification input */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 block">
                  Número de Transacción / Código de Referencia Bancaria
                </label>
                <input
                  type="text"
                  placeholder="Ej. TRX-982341 / 20261108"
                  value={transactionRef}
                  onChange={(e) => setTransactionRef(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-['JetBrains_Mono']"
                />
                <div className="text-[11px] text-slate-400">
                  (Opcional para pre-registro. También puedes enviar tu comprobante directamente por WhatsApp tras confirmar).
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a Datos
                </button>

                <button
                  type="button"
                  onClick={handleConfirmRegistration}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  Confirmar & Generar Acreditación
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONFIRMATION & CREDENTIAL PASS */}
          {step === 3 && (
            <div className="space-y-5 text-center sm:text-left">
              <div className="flex items-center gap-3 p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-emerald-300 text-xs">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
                <div>
                  <strong>¡Pre-registro Exitoso!</strong> Tu inscripción para el Desafío Huayna Potosí 2026 ha sido reservada en el sistema de MTB Rodadas La Paz.
                </div>
              </div>

              {/* Virtual Bib Credential Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
                      Credencial Oficial de Corredor
                    </div>
                    <div className="text-xl font-extrabold uppercase font-['Barlow_Condensed'] text-white">
                      Desafío Huayna Potosí 2026
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block">Dorsal Asignado:</span>
                    <span className="font-['JetBrains_Mono'] text-2xl font-black text-amber-400">
                      {ticketNumber}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-left">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Atleta</span>
                    <strong className="text-white truncate block">{formData.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Documento</span>
                    <strong className="text-slate-200 font-['JetBrains_Mono']">{formData.documentId}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Categoría</span>
                    <strong className="text-amber-300 truncate block">
                      {EVENT_DATA.categories.find((c) => c.id === category)?.name || category}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Tipo Sangre</span>
                    <strong className="text-rose-400 font-['JetBrains_Mono']">{formData.bloodType}</strong>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 rounded border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <div className="space-y-0.5 text-left">
                    <div className="text-[11px] text-slate-400">Punto de Entrega de Kit Físico:</div>
                    <div className="font-semibold text-white">Patio Histórico ALP (La Paz) o Partida Patamanta</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-emerald-400 font-bold">Chip Habilitado</div>
                    <div className="text-[10px] text-slate-400">08 Nov 2026</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp notification action */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/59178910808?text=${encodeURIComponent(
                    `Hola MTB Rodadas La Paz, confirmo mi inscripción al Desafío Huayna Potosí 2026. Atleta: ${formData.fullName}, Dorsal: ${ticketNumber}, Categoría: ${category}, Monto: ${costBOB} BOB.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-md shadow-emerald-700/20"
                >
                  Enviar Comprobante a WhatsApp (+591 78910808)
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Finalizar & Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
