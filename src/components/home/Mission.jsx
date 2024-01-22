const Mission = () => {
  return ( 
  <div>Mission
  
    <div className="flex">
      <div className="bg-rishi-orange" style={{flex: 1, width:'50%',height:'438px'}}>
        <div className="bg-rishi-orange" style={{width:'477px',height:'130px', top:'1161px',left:'-51px'}}> 
          <div className="text-rishi-white text-4xl" style={{lineHeight:'48px', fontWeight:'700'}}>Objective</div>
        
        </div>
        
        <div className="bg-rishi-orange" style={{width:'589px',height:'270px'}}> 
          <div className="text-rishi-white text-2xl"style={{lineHeight:'38.5px', fontWeight:'400'}}> Through our fundraising events like Holi and Garba, we have had the opportunity to support this amazing village in Ghangar, India. The locals living there are strong, hardworking, and high-spirited. Together, we will continue to put efforts towards strengthening this community & we thank you all for participating in our events thus far! </div>
        </div>
      
      </div>
    
      <div className="bg-rishi-green" style={{flex:1, width:'50%',height:'438px', position:'absolute', right:0}}>
        <div className="bg-rishi-green" style={{width:'477px',height:'130px'}}> 
          <div className="text-rishi-white text-4xl"style={{lineHeight:'48px', fontWeight:'700'}}>UCR Chapter</div>
        </div>

        <div className="bg-rishi-green" style={{width:'589px',height:'193px'}}> 
          <div className="text-rishi-white text-2xl"style={{lineHeight:'38.5px', fontWeight:'400'}}> At the University of California, Riverside, we are committed to supporting the village of Ghangar in Uttarakhand, India. We take a holistic approach to supporting our village by focusing on improving sustainability, quality of life, & women’s empowerment.</div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default Mission;
