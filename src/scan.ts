import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  let unscanned = ["home"];
  const scanned:string[]=[];
  while (unscanned.length > 0) {
    const target = unscanned.pop()
    scanned.push(target)
    if(target=="home"){
      unscanned = unscanned.concat(ns.scan(target));
    } else {
      unscanned = unscanned.concat(ns.scan(target).slice(1, -1));
    }
  }
  ns.write("scanlist.txt",scanned.toString(),"w")
}
