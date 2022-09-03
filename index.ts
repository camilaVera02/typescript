// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
class Persona{
  public nombre: Gabriel;
  public Apellido: Galvan;
  private AñoDeNac:1992;
  private lugarDeNac:SgoCapital;
constructor(nombre:Gabriel, apellido:galvan, lugarDeNac:SgoCapital){ 
this.nombre=nombre;
this.apellido=apllido;
this.lugarDeNac=lugarDeNac;
this.AñoDeNac=AñoDeNac;
}
public edad(AñoActual:number):number
{ 
 return AñoActual-this.AñoDeNac;
 }
 public identificacarse():string
 {
   return this.Apellido+this.nombre;
 }
}
