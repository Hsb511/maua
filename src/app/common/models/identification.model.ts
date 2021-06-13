export class IdentificationModel {
  constructor(results: Result[]){
    this.results = results;
  }
  results: Result[];
}

export class Result {
  constructor(score: number, species: Specie){
    this.score = score;
    this.species = species;
  }
  score: number;
  species: Specie;
}

class Taxon {
  constructor(
    scientificNameWithoutAuthor: string,
    scientificNameAuthorship: string,
    scientificName: string
  ){
    this.scientificName = scientificName;
    this.scientificNameAuthorship = scientificNameAuthorship;
    this.scientificNameWithoutAuthor = scientificNameWithoutAuthor;
  };
  scientificNameWithoutAuthor: string;
  scientificNameAuthorship: string;
  scientificName: string;
}

export class Specie extends NamedObject {
  constructor(
    scientificNameWithoutAuthor: string,
    scientificNameAuthorship: string,
    scientificName: string,
    genus: NamedObject,
    family: NamedObject,
    commonNames:string[]
  ) {
    super(scientificNameWithoutAuthor, scientificNameAuthorship, scientificName);
    this.genus = genus;
    this.family = family;
    this.commonNames = commonNames;
  }
  genus: NamedObject;
  family: NamedObject;
  commonNames: string[];
}
