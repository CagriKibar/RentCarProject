import { ResponseModel } from "src/app/models/responseModel";
import { RentalDetailDto } from "./rentalDetailDto";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data:RentalDetailDto[];
}