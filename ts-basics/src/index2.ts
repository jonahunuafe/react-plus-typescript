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
const hc = new Tiktok("test", "Test", 3)
hc.getReelTime();