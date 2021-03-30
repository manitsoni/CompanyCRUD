export class Company {
    id!:number;
    email!:string;
    name !: string;
    totalEmployees !: number;
    address !: string;
    isActive !: boolean;
    branch !: Branch[];
    totalBranch !: number;
}
export class Branch {
    branchId !: number;
    branchname !: string;
    branchAddress !: string;
}
