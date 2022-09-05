export default class Rectangulo {
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }

    obtenerPerimetro() {
        let perimetro = (this._altura + this._altura + this._base + this._base);
        return perimetro;
    }

    obtenerArea() {
        let area = (this._base * this._altura);
        return area;
    }
}