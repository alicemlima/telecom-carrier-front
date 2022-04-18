export function phoneNumberMask(e) {
    e.currentTarget.maxLength = 10;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{4})(\d{4})/, "$1 $2-$3");
    e.currentTarget.value = value;
    return e;
};

export function floatPriceMask(e) {
    e.currentTarget.maxLength = 3;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{1})(\d{2})/, "$1.$2");
    e.currentTarget.value = value;
    console.log(value)
    return e;
};