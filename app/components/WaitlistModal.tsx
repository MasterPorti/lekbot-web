"use client";

import { useState } from "react";
import { X, Mail, Bell, Loader2, Check, ExternalLink, Sparkles } from "lucide-react";

interface WaitlistButtonProps {
  variant?: "hero" | "footer";
  children?: React.ReactNode;
}

export default function WaitlistButton({ variant = "hero", children }: WaitlistButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simular guardado (reemplazar con tu API real)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Aquí puedes agregar la lógica para guardar el email
    // Por ejemplo, enviar a una API, Mailchimp, etc.
    console.log("Email registrado:", email);

    setStatus("success");
  };

  const isHero = variant === "hero";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          isHero
            ? `flex-1 flex items-center justify-center gap-2.5 bg-[#FFE600] text-gray-900 text-base font-bold
               py-4 rounded-full hover:bg-[#FFD000] transition-all duration-200 hover:scale-105
               shadow-lg shadow-[#FFE600]/40`
            : `inline-flex items-center gap-3 bg-[#FFE600] text-gray-900 text-lg font-bold
               px-12 py-5 rounded-full hover:bg-[#FFD600] transition-all duration-200 hover:scale-105
               shadow-xl shadow-[#FFE600]/20`
        }
      >
        {children || (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width={isHero ? 20 : 40} height={isHero ? 20 : 40} viewBox="0 0 1447 1097" fill="none">
              <g clipPath="url(#clip0_2082_5)">
                <path d="M1447.13 518.575C1447.13 233.765 1123.45 0.587646 723.78 0.587646C324.111 0.587646 0.424805 233.765 0.424805 518.575V548.556C0.424805 851.687 283.08 1096.52 723.78 1096.52C1166 1096.52 1447.13 851.687 1447.13 548.556V518.575Z" fill="#2D3277"/>
                <path d="M1421.3 518.575C1421.3 786.73 1109.77 1004.92 726.818 1004.92C343.866 1004.92 32.3374 786.73 32.3374 518.575C32.3374 250.421 343.866 32.2336 726.818 32.2336C1109.77 32.2336 1421.3 250.421 1421.3 518.575Z" fill="#FFE600"/>
                <path d="M495.831 365.346C495.831 365.346 488.232 373.672 492.791 380.334C503.429 395.324 536.862 403.653 571.814 395.325C591.57 390.328 618.923 367.01 643.237 345.358C670.591 322.04 697.945 297.056 725.299 288.729C754.172 278.735 772.408 283.732 784.566 287.064C798.243 292.06 813.439 302.053 839.273 322.04C886.382 360.348 1077.86 543.56 1111.29 575.206C1137.13 561.881 1255.66 506.918 1416.74 466.944C1403.06 373.673 1351.4 287.064 1272.37 217.111C1162.96 267.078 1027.71 293.727 895.499 223.774C895.499 223.774 824.077 187.13 752.653 188.795C647.797 192.126 603.727 240.428 555.098 293.726L495.831 365.346Z" fill="white"/>
                <path d="M1103.69 595.19C1102.17 593.525 878.785 380.333 828.636 338.694C799.763 315.376 783.045 308.714 766.329 305.383C757.211 303.717 745.054 305.384 735.936 308.715C713.141 315.378 681.23 338.695 653.876 362.012C625.003 386.996 599.168 410.315 574.853 415.311C542.94 423.639 504.95 413.645 488.234 400.321C480.635 395.324 476.076 388.662 473.037 382C466.959 365.345 479.116 352.02 480.635 350.354L541.422 277.069L562.697 253.751C542.942 257.082 524.705 262.08 506.469 267.076C483.674 273.739 462.4 280.4 441.125 280.4C432.007 280.4 383.378 272.073 374.26 268.742C318.033 252.086 269.402 235.431 196.459 198.789C109.839 270.408 50.5731 358.682 33.8569 456.95C46.0142 460.281 67.2886 466.943 74.8868 468.608C272.442 516.91 333.229 566.876 345.386 576.87C357.543 561.88 374.259 553.551 394.014 553.551C415.289 553.551 435.045 565.211 447.202 583.532C457.84 573.539 474.557 565.211 494.313 565.211C503.431 565.211 512.547 566.876 523.185 570.207C545.979 578.535 556.618 595.191 562.697 610.181C570.295 606.85 579.412 603.518 590.05 603.518C600.687 603.518 611.326 606.849 623.483 611.846C659.955 628.501 666.033 668.476 662.994 698.456H670.592C714.662 698.456 749.613 736.763 749.613 785.064C749.613 800.054 746.574 813.379 740.496 825.038C752.653 831.7 781.526 848.355 808.88 845.024C830.155 841.693 837.753 835.03 840.793 830.033C842.312 826.702 845.351 823.371 842.312 820.04L786.085 751.753C786.085 751.753 776.967 741.759 780.006 738.428C783.046 735.097 789.125 740.094 793.684 743.425C822.557 770.074 855.989 808.382 855.989 808.382C855.989 808.382 859.028 813.379 871.186 816.71C881.823 818.376 901.579 816.709 915.256 805.05C918.295 801.719 922.854 798.388 924.374 795.057C938.05 775.07 922.854 755.083 922.854 755.083L857.508 675.138C857.508 675.138 848.392 665.144 851.431 661.813C854.471 658.481 860.548 663.479 865.107 666.81C886.382 685.131 915.257 718.443 942.61 748.423C948.689 753.419 973.003 770.073 1004.92 746.755C1024.67 731.765 1029.23 715.111 1027.71 701.786C1026.19 685.131 1014.03 671.805 1014.03 671.805L925.893 573.539C925.893 573.539 916.776 565.211 919.816 560.214C922.855 556.883 928.932 561.88 933.491 565.211C962.364 591.86 1038.35 668.475 1038.35 668.475C1039.87 668.475 1065.7 690.128 1099.13 666.81C1111.29 658.482 1118.89 646.824 1118.89 631.834C1120.41 610.181 1103.69 595.19 1103.69 595.19Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_2082_5">
                  <rect width="1447" height="1097" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Comprar en Mercado Libre
            <ExternalLink size={isHero ? 15 : 18} />
          </>
        )}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => status !== "loading" && setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              disabled={status === "loading"}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200
                         transition-colors duration-200 disabled:opacity-50"
            >
              <X size={18} className="text-gray-500" />
            </button>

            {/* Header decoration */}
            <div className="relative h-32 bg-gradient-to-br from-[#dc2a36] to-[#b01f2a] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <Sparkles size={40} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              {status === "success" ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Te avisaremos
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Recibirás un correo en <strong className="text-gray-700">{email}</strong> cuando el Lek 2 esté disponible.
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setStatus("idle");
                      setEmail("");
                    }}
                    className="w-full py-3 px-6 bg-gray-900 text-white font-semibold rounded-full
                               hover:bg-gray-800 transition-colors duration-200"
                  >
                    Entendido
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Estamos preparando stock
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      El <strong className="text-[#dc2a36]">Lek 2</strong> está casi listo.
                      Déjanos tu correo y serás de los primeros en saber cuando esté disponible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        required
                        disabled={status === "loading"}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl
                                   text-gray-900 placeholder:text-gray-400 text-sm
                                   focus:outline-none focus:border-[#dc2a36] focus:bg-white
                                   transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading" || !email}
                      className="w-full py-4 px-6 bg-[#dc2a36] text-white font-bold rounded-full
                                 flex items-center justify-center gap-2
                                 hover:bg-[#b01f2a] transition-all duration-200
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Registrando...
                        </>
                      ) : (
                        <>
                          <Bell size={18} />
                          Avisarme cuando esté disponible
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    Sin spam. Solo te avisaremos cuando esté listo.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
