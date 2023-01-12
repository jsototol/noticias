import { Distritos } from './../../Interfaces/distritos';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  textoBuscar: string ='';
  texto: string ='';
  articleFilter!: any[];
  name!: string;
  @Input() nombre: string ='';
  @Input() url: any;

  @Input() articles: Distritos[]=[];
  constructor(private modalCtrl: ModalController) {

   }
ngOnInit(): void {
  this.articleFilter= this.articles
}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  onSearchChange(ev:any){
    this.textoBuscar = ev.detail.value
    console.log(this.textoBuscar)
    this.texto=this.textoBuscar.toLocaleLowerCase();
    this.filter()
  }

  filter(){
   this.articleFilter = this.articles.filter(item => item.nombre.toLocaleLowerCase().includes(this.texto))
   console.log('Esto se filtro',this.articleFilter)
  }

}
