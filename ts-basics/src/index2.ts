abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReelTime(): number {
        //complex calculation
        return 8
    }
}

class Tiktok extends TakePhoto {
 // Constructors for derived classes must contain a 'super' call  
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

// You cannot create object from the abstract class, you can only create object from the class which 
// is inheriting it.
const hc = new Tiktok("test", "Test", 3);
hc.getReelTime();


// Generics
const score: Array<number> = []
const names: Array<string> = []

function identityOne<Type>(val: Type): Type {
    return val
}

identityOne(3)

function identityTwo<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string;
    type: number
}

identityTwo<Bottle>({brand: "fanta", type: 3})


function getSearchProducts<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

// Using arrow functions for generics
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
     const myIndex = 4
    return products[myIndex]
}
