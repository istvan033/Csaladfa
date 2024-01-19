module default {
type nagyszulok{
    required Anya: str;
    required Apa: str;
    required szuletes: str;
    halal: str;
    required multi gyerek: gyerek {
    constraint exclusive;
  }
    
  }
type gyerek{ 
  required felmenok: nagyszulok;
  required nev: str;
  required szuletes: str; 
  halal: str;
  required multi unoka: unoka{
    constraint exclusive;
  }
}

type unoka{
  required felmenok: gyerek;
  required nev : str;
  required szuletes: str;
  halal: str;

}
}
