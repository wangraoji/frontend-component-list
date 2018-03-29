import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()

export class CommonService {
    constructor(private http: Http) { }

    getHeadDatas(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (environment.production) {
                let data = {
                    headDatas: [
                        { title: "工作流程", parameter: "workProcess" },
                        { title: "常用技巧", parameter: "commonTechniques" },
                        { title: "angular2Doc", parameter: "angular2Doc" },
                    ]
                };
                resolve(data)
            } else {
                this.http.get('http://192.168.2.242:3000/headData').subscribe((res: Response) => {
                    resolve(res.json())
                })
            }
        })
    }
    getData(parameter): Promise<any> {
        return new Promise((resolve, reject) => {
            if (environment.production) {
                let data = {
                    contData: [
                        { path: "workProcess" },
                        { path: "commonTechniques" },
                        { path: "angular2Doc" },
                    ]
                };
                data.contData.forEach(el => {
                    if (parameter === el.path) {
                        resolve({ path: el.path });
                    }
                })
            } else {
                let cs = {
                    "parameter": parameter
                }
                this.http.post('http://192.168.2.242:3000/contData', JSON.stringify(cs)).subscribe((res) => {
                    resolve(res.json())
                })
            }

        })
    }
}