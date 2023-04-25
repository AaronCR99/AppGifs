import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifrespose } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  api_key:string = 'E7dXTvJfhnZ7ImXom5nQi64WtAaVmiOH';
  servicioUrl:string='http://api.giphy.com/v1/gifs';

  private _historial:string[]=[];

  public resultados:Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

      
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
   }

  async buscarGifs(query:string=''){
    query=query.trim().toLocaleLowerCase();
    if(query.trim().length === 0){return;}
    if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);     
    
    localStorage.setItem('historial',JSON.stringify(this.historial));
   // console.log(this._historial);
    }
const params = new HttpParams()
.set('api_key', this.api_key)
.set('limit','10')
.set('q',query);

    this.http.get<SearchGifrespose>(`${this.servicioUrl}/search`,{params})
    .subscribe( (resp)=> {
      console.log(resp.data);
      this.resultados=resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
    });
     // const resp = await  fetch();
      //const data = await resp.json();
     // console.log(data);

  }//fin del metodo

  
}
