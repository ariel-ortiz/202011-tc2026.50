const x = 42;
const f = () => console.log('hola');
class C {
  m() {
    console.log('Soy una instancia de C');
  }
}
const c = new C();
c.m();
const elem = <p>Hola { 6 * 7 }!</p>;