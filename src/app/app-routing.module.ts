import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contact/contact.component';
// se define la variable 'routes' como un array de tipo 'Routes' q es una clase d angular, definido para manejar las rutas en el proyecto
const routes:Routes=[
//cada elemento del array es un objeto de tipo 'Routes', por lo tanto tiene todos sus propiedades y metodos
//la propiedad "path:'home'" define la ruta o directorio,'home' en este caso
// la propiedad 'component:' especifica el vinculo q se va a ejecutar, 'HomePageComponent' en este caso
// {
// path:'home',
// component: HomePageComponent
// },

{
  path:'about',
  component: AboutPageComponent
},
{
  path:'contact',
  component: ContactPageComponent
},
{
  //*j* esta es la sintaxis para 'lazyLoad' ó 'carga perezosa'
  //*   1 basicamente se usa el metodo 'loadChildren', se define una funcion d carga '()=>'
  //*   2se llama el metodo import('argumento').then('modulo'), este import() v a ser una promesa,
  //*   2.1el argumento va a ser el path de lo q le queremos hacer la carga perezosa,'./countries/countries.module' en este caso
  //*   3.then() es que se cumplio la promesa, entonces decimos q vamos a tener un modulo(m) y dentro del modulo el submodulo q ocupamos, 'm.CountriesModule' en este caso
  path:'countries',
  loadChildren:()=> import('./countries/countries.module').then(m=>m.CountriesModule)

},

{
  path:'**',//este  path:'**' especifica q es indefinido y siempre se va a redirecionar a una pagian x defecto'countries' en este caso
  redirectTo: 'countries'
  }



];//fin d mi variable 'routes'

@NgModule({
imports:[
// hay que importar la clase 'RouterModule' y exportarla para q funcionen los vinculos,
// llamar la funcion'forRoot' y pasarle como parametros las rutas definidas, en este caso'routes'
//la funcion 'forRoot' solo se llama una sola vez en toda la aplicacion para manejar los directorios principales
//luego para directorios secundarios o rutas hijas, se usa la funcion 'forchild()' q funciona exactamente igual
RouterModule.forRoot(routes)

],
exports:[
RouterModule// es obligao exportar este modulo para q funcionen las rutas

]
})
export class AppRoutingModule { }//este modulo se definió para manejar las rutas de mis paginas
