import { ResponseModel } from "src/app/models/responseModel";
import { CustomerDetailDto } from "./customerDetailDto";

export interface CustomerDetailDtoResponseModel extends ResponseModel{
    data:CustomerDetailDto[];
    
}