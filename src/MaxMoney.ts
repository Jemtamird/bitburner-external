import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
    const list = ns.read("scanlist.txt")
    const data = list.split(",")
    const MaxMoney:number[]=[]
    for (let i = 0; i < data.length; i++) {
        MaxMoney[i] = ns.getServerMaxMoney(data[i]);
    }
    ns.write("maxMoneylist.txt",MaxMoney.toString(),"w")
}
