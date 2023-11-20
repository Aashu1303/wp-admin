import Halls from "../models/Halls.js"
import Slots from "../models/Slots.js"


export const createHall = async(req,res,next)=>{
    const newHall=new Halls(req.body);


    try{
        const savedHall=await newHall.save();
        res.status(200).json(savedHall);
    }catch(err){
        next(err)
    }

}

export const updateHall = async(req,res,next)=>{
    try{
        const updatedHall=await Halls.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHall);
    }catch(err){
        next(err)
    }

}

export const deleteHall = async(req,res,next)=>{
    try{
        await Halls.findByIdAndDelete(req.params.id);
        res.status(200).json("Hall has been deleted");
    }catch(err){
        next(err)
    }

}
export const getHall = async(req,res,next)=>{
    try{
        const halls=await Halls.findById(req.params.id)
        res.status(200).json(halls);
    }catch(err){
        next(err)
    }

}

export const getHalls = async(req,res,next)=>{
    const {min,max,...others}=req.query;
    try{
        const hall=await Halls.find({...others,affordableprice : {$gt:min|1000,$lt:max||90000}}).limit(req.query.limit);
        res.status(200).json(hall);
    }catch(err){
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Halls.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
    
}

export const countByType = async (req, res, next) => {
    try {
      const marriageCount = await Halls.countDocuments({ type: "Marriage" });
      const birthdayCount = await Halls.countDocuments({ type: "Birthday" });
      const engagementCount = await Halls.countDocuments({ type: "Engagement" });
      const bachelorpartyCount = await Halls.countDocuments({ type: "Bachelor Party" });
      /*
      const weddinganniversaryCount = await Halls.countDocuments({ type: "weddinganniversary" });*/
      const annualfunctionCount = await Halls.countDocuments({ type: "Annaul Function" });
      
  
      res.status(200).json([
        { type: "Marriage", count: marriageCount },
        { type: "Birthday", count: birthdayCount },
        { type: "Engagement", count: engagementCount },
        { type: "Bachelor Party", count: bachelorpartyCount },
        /*{ type: "weddinganniversarys", count: weddinganniversaryCount },*/
        { type: "Annual Function", count: annualfunctionCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

  export const getHallSlots=async(req,res,next)=>{
    try{
        const hall =await Halls.findById(req.params.id)
        const list =await Promise.all(hall.slots.map(slot=>{
            return Slots.findById(slot);
        })
        );
        res.status(200).json(list)
    }
    catch(err){
        next(err)
    }
  }