import json
import os

entries = []
seen = set()

def add_w(en, es, cat, pos, pho_en, pho_es, def_es, ex_en, ex_es):
    key = en.lower().strip()
    if key in seen:
        return
    seen.add(key)
    id_str = "".join([c if c.isalnum() else "-" for c in key]).strip("-")
    entries.append({
        "id": id_str,
        "en": en.strip(),
        "es": es.strip(),
        "category": cat.strip(),
        "partOfSpeech": pos.strip(),
        "phoneticEn": pho_en.strip(),
        "phoneticEs": pho_es.strip(),
        "definitionEs": def_es.strip(),
        "exampleEn": ex_en.strip(),
        "exampleEs": ex_es.strip()
    })

# Run the full builder
import build_data_script
build_data_script.populate(add_w)

print(f"Total entries assembled: {len(entries)}")

# Write to src/data/bilingualDictionaryData.ts
ts_content = """// Diccionario Bilingüe Español-Inglés / Inglés-Español (Más de 1000 términos)
// STANAG 6001 - Terminología Militar, Táctica, Logística, Operacional y de la Vida Diaria

export interface BilingualEntry {
  id: string;
  en: string;
  es: string;
  category: string;
  partOfSpeech: string;
  phoneticEn: string;
  phoneticEs: string;
  definitionEs: string;
  exampleEn: string;
  exampleEs: string;
}

export const BILINGUAL_DICTIONARY: BilingualEntry[] = """ + json.dumps(entries, ensure_ascii=False, indent=2) + """;

export const DICTIONARY_CATEGORIES = [
  "Todos",
  "Táctico & Combate",
  "Armamento & Balística",
  "Radio & Comunicaciones",
  "Jerarquía & Grados",
  "Logística & Abastecimiento",
  "Sanidad & Primeros Auxilios",
  "Misiones de Paz ONU",
  "Topografía & Navegación",
  "Inteligencia & Seguridad",
  "Vida de Cuartel & Rutina",
  "Inglés General & Cotidiano",
  "Conectores & Expresiones STANAG"
] as const;
"""

with open("src/data/bilingualDictionaryData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Saved to src/data/bilingualDictionaryData.ts successfully!")
