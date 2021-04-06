import { ResponseModel } from "src/app/models/responseModel";
import { CarDetailDto } from "./carDetailDto";

export interface CarDetailDtoResponseModel extends ResponseModel{
    data:CarDetailDto[];
}