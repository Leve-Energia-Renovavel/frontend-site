import { statusColors } from "@/app/pages/globalStyles"

export const statusHelper = {
    pago: statusColors["paid"],
    pagoFocus: statusColors["paidFocus"],
    atencao: statusColors["warning"],
    atencaoFocus: statusColors["warningFocus"],
    pendente: statusColors["pending"],
    pendenteFocus: statusColors["pendingFocus"],
    
    paid: statusColors["paid"],
    due: statusColors["warning"],
    warning: statusColors["warning"],
    pending: statusColors["pending"],
}