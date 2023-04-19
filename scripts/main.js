import {
FILE_LIST
} from './settings.js';


Hooks.once('ready', async () => {
  game.CoriolisAiArt = new CoriolisAiArt();

}
);

export class CoriolisAiArt{
getPortrait(concept, filter) { 
  var vportrait = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var inputfile = FILE_LIST;
    var vconcept = concept;
    var vfilter = filter;
    const filterlist = ['male','female'];
    const conceptlist = ['agent', 'artist', 'common', 'dataSpider', 'fugitive', 'medicurg', 'negociator' , 'pilot', 'preacher', 'scientist', 'shipWorker', 'soldier', 'trailblazer'];
 

    if(typeof(concept)=== "undefined") {
    vconcept = conceptlist[Math.floor(Math.random()*conceptlist.length)];
    }

    if(typeof(filter) === "undefined") {
    console.log('undefined filter');
    vfilter = filterlist[Math.floor(Math.random()*filterlist.length)];
    }

// get random filename from list for given concept and filter
    var filteredfilewithtoken = inputfile.filter(word => word.includes(vconcept) );
    filteredfilewithtoken = filteredfilewithtoken.filter(word => word.includes(vfilter) );
    var filteredfile = filteredfilewithtoken.filter(word => !word.includes('token') );

// select potrait
   vportrait  = filteredfile[Math.floor(Math.random()*filteredfile.length)];


// check if token exists in file list, if not, pass portrait
   filteredfile = filteredfilewithtoken.filter(word => word.includes(vportrait) );
   filteredfile = filteredfile.filter(word => word.includes('token') );
   
  if (filteredfile[0] === undefined) {
      vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ vportrait  ;
  }
  else
  {
    vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ filteredfile[0] ;
  }

//build portrait file path
  vportrait  = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ vportrait  ;
   
  console.log(vportrait );
  console.log(vtoken  );
  return{portrait: vportrait , token: vtoken };
}
  
getHumanPortrait(concept){
    var vportrait = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var inputfile = FILE_LIST;
    var vconcept = concept;

// get random filename from list for given concept
    var filteredfilewithtoken = inputfile.filter(word => word.includes(vconcept) );
    var filteredfile = filteredfilewithtoken.filter(word => !word.includes('token') );

// if there is nothing to fulfill concept, get random concept
    if (filteredfile[0] === undefined) {
    const conceptlist = ['agent', 'artist', 'common', 'dataSpider', 'fugitive', 'medicurg', 'negociator' , 'pilot', 'preacher', 'scientist', 'shipWorker', 'soldier', 'trailblazer'];
    vconcept = conceptlist[Math.floor(Math.random()*conceptlist.length)];
    var filteredfilewithtoken = inputfile.filter(word => word.includes(vconcept ) );
    var filteredfile = filteredfilewithtoken.filter(word => !word.includes('token') );
    }


// select potrait
   vportrait  = filteredfile[Math.floor(Math.random()*filteredfile.length)];


// check if token exists in file list, if not, pass portrait
   filteredfile = filteredfilewithtoken.filter(word => word.includes(vportrait) );
   filteredfile = filteredfile.filter(word => word.includes('token') );
   
  if (filteredfile[0] === undefined) {
      vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ vportrait  ;
  }
  else
  {
    vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ filteredfile[0] ;
  }

//build portrait file path
  vportrait  = 'modules/coriolis-kbender-ai-art-pack/portraits/' + vconcept + '/'+ vportrait  ;
   
  console.log(filteredfile[0]);
  console.log(vportrait );
  console.log(vtoken  );
  return{portrait: vportrait , token: vtoken };
}
	
getHumanitePortrait(concept){
    var vportrait = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/trailblazer/trailblazer_female_001.webp';
    var inputfile = FILE_LIST;
    var vconcept = concept;

// get random filename from list for given concept
    inputfile= inputfile.filter(word => word.includes('humanite') );
    var filteredfilewithtoken = inputfile.filter(word => word.includes(vconcept) );
    var filteredfile = filteredfilewithtoken.filter(word => !word.includes('token') );

// if there is nothing to fulfill concept, get random concept
    if (filteredfile[0] === undefined) {
    const conceptlist = ['jaron'];
    vconcept = conceptlist[Math.floor(Math.random()*conceptlist.length)];
    var filteredfilewithtoken = inputfile.filter(word => word.includes(vconcept ) );
    var filteredfile = filteredfilewithtoken.filter(word => !word.includes('token') );
    }


// select potrait
   vportrait  = filteredfile[Math.floor(Math.random()*filteredfile.length)];


// check if token exists in file list, if not, pass portrait
   filteredfile = filteredfilewithtoken.filter(word => word.includes(vportrait) );
   filteredfile = filteredfile.filter(word => word.includes('token') );
   
  if (filteredfile[0] === undefined) {
      vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/humanites/'+ vportrait  ;
  }
  else
  {
    vtoken = 'modules/coriolis-kbender-ai-art-pack/portraits/humanites/'+ filteredfile[0] ;
  }

//build portrait file path
  vportrait  = 'modules/coriolis-kbender-ai-art-pack/portraits/humanites/'+ vportrait  ;
   
  console.log(filteredfile[0]);
  console.log(vportrait );
  console.log(vtoken  );
  return{portrait: vportrait , token: vtoken };

    }
}