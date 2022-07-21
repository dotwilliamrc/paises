import { Component } from '@angular/core'
import { Country } from '../../interfaces/pais-interface'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    .small-flag {
      width: 4rem;
    }
    `
  ]
})
export class PorPaisComponent {
  constructor (
    private readonly paisService: PaisService
  ) { }

  public termino: string = ''

  public paises: Country[] = []

  public error: boolean = false

  public auxTermino: string = 'hola'

  public buscar (): void {
    this.error = false
    const resultado = this.paisService.buscarPais(this.termino)
    resultado.subscribe({
      next: (r: Country[]): void => {
        this.paises = [...r]
        console.log(this.paises)
      },
      error: (): void => {
        this.error = true
        this.paises = []
      }
    })
    this.auxTermino = this.termino + ''
    this.termino = ''
  }
}
