import { prisma } from "../../../prisma/client";





export class CustomerService {
    static async createCustomer(payload: any) {
        const result = await prisma.customer.create({
            data: payload
        })
        return result;
    }

    static async getAllCustomers() {
        const result = await prisma.customer.findMany({
            where: {
                isDeleted: false
            }
        });
        return result;
    }

    static async getSingleCustomer(id: string) {
        const result = await prisma.customer.findUnique({
            where: {
                customerId: id,
                isDeleted: false
           }
        });
        return result;
    }

    static async updateCustomer(id: string, payload: any) {
        const result = await prisma.customer.update({
            where: {
                customerId: id,
                isDeleted: false
            },
            data: payload
        })
        return result;
    }


    static async deleteCustomer(id: string) {
        const result = await prisma.customer.update({
            where: {
                customerId: id,
                isDeleted:false
            },
            data: {
                isDeleted:true
            }
        })
        return result;
    }

}