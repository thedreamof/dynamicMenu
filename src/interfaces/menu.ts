export interface MenuI {
    lista: Lista[];
}

export interface Lista {
    card_list:     any[];
    pays_transfer: PaysTransfer[];
    support:       Support[];
    enterprises:   any[];
}

export interface PaysTransfer {
    between_cards: any[];
    banks:         any[];
    credit_card:   any[];
}

export interface Support {
    lock:        any[];
    change_pass: any[];
}
