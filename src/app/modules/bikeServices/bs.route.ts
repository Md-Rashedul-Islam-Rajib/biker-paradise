import { ServiceRecordController } from './bs.controller';
import { Router } from "express";

const ServiceRecordRoute: Router = Router();


ServiceRecordRoute.post('/', ServiceRecordController.createServiceRecord)
ServiceRecordRoute.get('/', ServiceRecordController.getAllServiceRecords)
ServiceRecordRoute.get(
  "/status",
  ServiceRecordController.getAllPendingServiceRecords
);
ServiceRecordRoute.get('/:id', ServiceRecordController.getSingleServiceRecord)
ServiceRecordRoute.put('/:id/complete', ServiceRecordController.updateServiceRecord)


export default ServiceRecordRoute;