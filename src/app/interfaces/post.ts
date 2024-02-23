import { FileHandler } from "./FileHandler";

export interface Post 
{
     poTitle: string;
     poImageName:string;
     poContent: string;
     poDate: string;
     postImages: FileHandler[],
     category: 
     {
       coId: number,
       coName: string,
       coDes: string,
       
     },
     user:
     {
        id: number,
        name: string,
     },

     

}