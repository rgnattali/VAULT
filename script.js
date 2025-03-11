// Tabelas de Resolução do MERP com danos e críticos por tipo de armadura
const tabelasResolucao = {
    "1H Slash": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 51, max: 55, plate: "1", chain: "1", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "2", chain: "1", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "2", chain: "2", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 66, max: 70, plate: "3", chain: "3", rigidLeather: "2", softLeather: "3", none: "0" },
        { min: 71, max: 75, plate: "3", chain: "4", rigidLeather: "3", softLeather: "5", none: "0" },
        { min: 76, max: 80, plate: "4", chain: "5", rigidLeather: "5", softLeather: "7A", none: "7" },
        { min: 81, max: 85, plate: "5", chain: "6", rigidLeather: "6", softLeather: "9A", none: "9A" },
        { min: 86, max: 90, plate: "5", chain: "7", rigidLeather: "7A", softLeather: "10B", none: "10A" },
        { min: 91, max: 95, plate: "6", chain: "8", rigidLeather: "9A", softLeather: "12B", none: "11B" },
        { min: 96, max: 100, plate: "6", chain: "9", rigidLeather: "10B", softLeather: "13B", none: "13C" },
        { min: 101, max: 105, plate: "7", chain: "10A", rigidLeather: "11B", softLeather: "14C", none: "15C" },
        { min: 106, max: 110, plate: "8", chain: "11A", rigidLeather: "12B", softLeather: "15C", none: "17D" },
        { min: 111, max: 115, plate: "8A", chain: "12B", rigidLeather: "13C", softLeather: "17C", none: "19D" },
        { min: 116, max: 120, plate: "9A", chain: "13B", rigidLeather: "15C", softLeather: "18D", none: "20D" },
        { min: 121, max: 125, plate: "9A", chain: "13C", rigidLeather: "16C", softLeather: "19D", none: "21E" },
        { min: 126, max: 130, plate: "10B", chain: "14C", rigidLeather: "17D", softLeather: "20D", none: "23E" },
        { min: 131, max: 135, plate: "11B", chain: "15C", rigidLeather: "18D", softLeather: "22D", none: "25E" },
        { min: 136, max: 140, plate: "11C", chain: "16D", rigidLeather: "20D", softLeather: "23E", none: "27E" },
        { min: 141, max: 145, plate: "12D", chain: "17D", rigidLeather: "21E", softLeather: "24E", none: "28E" },
        { min: 146, max: 150, plate: "12E", chain: "18E", rigidLeather: "22E", softLeather: "25E", none: "30E" },
    ],
    "1H Concussion": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 35, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 36, max: 40, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 41, max: 45, plate: "1", chain: "1", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "2", chain: "2", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 51, max: 55, plate: "3", chain: "3", rigidLeather: "0", softLeather: "0", none: "3" },
        { min: 56, max: 60, plate: "3", chain: "4", rigidLeather: "0", softLeather: "0", none: "O" },
        { min: 61, max: 65, plate: "4", chain: "5", rigidLeather: "0", softLeather: "0", none: "O" },
        { min: 66, max: 70, plate: "5", chain: "6", rigidLeather: "2", softLeather: "3", none: "8" },
        { min: 71, max: 75, plate: "5", chain: "7", rigidLeather: "3", softLeather: "5", none: "O" },
        { min: 76, max: 80, plate: "6", chain: "8", rigidLeather: "4", softLeather: "6", none: "22D" },
        { min: 81, max: 85, plate: "7", chain: "9", rigidLeather: "6", softLeather: "7A", none: "6" },
        { min: 86, max: 90, plate: "8", chain: "10", rigidLeather: "7A", softLeather: "8A", none: "8" },
        { min: 91, max: 95, plate: "8", chain: "11", rigidLeather: "8A", softLeather: "9A", none: "9A" },
        { min: 96, max: 100, plate: "9", chain: "12A", rigidLeather: "9B", softLeather: "10B", none: "10B" },
        { min: 101, max: 105, plate: "10", chain: "13A", rigidLeather: "10B", softLeather: "11B", none: "12C" },
        { min: 106, max: 110, plate: "10A", chain: "14B", rigidLeather: "11B", softLeather: "12B", none: "13C" },
        { min: 111, max: 115, plate: "11A", chain: "15B", rigidLeather: "12C", softLeather: "13C", none: "14D" },
        { min: 116, max: 120, plate: "12B", chain: "16C", rigidLeather: "13C", softLeather: "14C", none: "15D" },
        { min: 121, max: 125, plate: "13B", chain: "17C", rigidLeather: "15C", softLeather: "15C", none: "17D" },
        { min: 126, max: 130, plate: "13C", chain: "18C", rigidLeather: "16C", softLeather: "16D", none: "18E" },
        { min: 131, max: 135, plate: "14C", chain: "19D", rigidLeather: "17D", softLeather: "17D", none: "19E" },
        { min: 136, max: 140, plate: "15D", chain: "20D", rigidLeather: "18D", softLeather: "18E", none: "21E" },
        { min: 141, max: 145, plate: "16D", chain: "21E", rigidLeather: "19E", softLeather: "19E", none: "22E" },
        { min: 146, max: 150, plate: "16E", chain: "22E", rigidLeather: "20E", softLeather: "20E", none: "23E" },
    ],
    "2H Weapons": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "2", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "3", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 66, max: 70, plate: "4", chain: "3", rigidLeather: "0", softLeather: "6", none: "0" },
        { min: 71, max: 75, plate: "5", chain: "5", rigidLeather: "2", softLeather: "8A", none: "0" },
        { min: 76, max: 80, plate: "6", chain: "7", rigidLeather: "4A", softLeather: "10A", none: "0" },
        { min: 81, max: 85, plate: "7", chain: "9", rigidLeather: "7A", softLeather: "13B", none: "10A" },
        { min: 86, max: 90, plate: "8", chain: "11", rigidLeather: "9B", softLeather: "15B", none: "13B" },
        { min: 91, max: 95, plate: "9", chain: "12A", rigidLeather: "12B", softLeather: "17C", none: "16C" },
        { min: 96, max: 100, plate: "11", chain: "14A", rigidLeather: "14C", softLeather: "20C", none: "19D" },
        { min: 101, max: 105, plate: "12A", chain: "16B", rigidLeather: "17C", softLeather: "22C", none: "22D" },
        { min: 106, max: 110, plate: "13A", chain: "18B", rigidLeather: "19C", softLeather: "24C", none: "25D" },
        { min: 111, max: 115, plate: "14B", chain: "20C", rigidLeather: "22C", softLeather: "27D", none: "28E" },
        { min: 116, max: 120, plate: "15B", chain: "22C", rigidLeather: "24D", softLeather: "29D", none: "31E" },
        { min: 121, max: 125, plate: "16C", chain: "24C", rigidLeather: "27D", softLeather: "31D", none: "33E" },
        { min: 126, max: 130, plate: "17C", chain: "26D", rigidLeather: "29D", softLeather: "33E", none: "36E" },
        { min: 131, max: 135, plate: "19D", chain: "28D", rigidLeather: "32E", softLeather: "36E", none: "39E" },
        { min: 136, max: 140, plate: "20D", chain: "29E", rigidLeather: "34E", softLeather: "38E", none: "42E" },
        { min: 141, max: 145, plate: "21E", chain: "31E", rigidLeather: "37E", softLeather: "40E", none: "45E" },
        { min: 146, max: 150, plate: "22E", chain: "33E", rigidLeather: "40E", softLeather: "43E", none: "48E" },
    ],
    "Missile": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 70, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 71, max: 75, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 76, max: 80, plate: "2", chain: "2", rigidLeather: "0", softLeather: "4", none: "0" },
        { min: 81, max: 85, plate: "3", chain: "4", rigidLeather: "3", softLeather: "6", none: "0" },
        { min: 86, max: 90, plate: "4", chain: "6", rigidLeather: "5", softLeather: "8A", none: "0" },
        { min: 91, max: 95, plate: "5", chain: "7", rigidLeather: "7A", softLeather: "10A", none: "8A" },
        { min: 96, max: 100, plate: "6", chain: "8A", rigidLeather: "9A", softLeather: "12B", none: "10B" },
        { min: 101, max: 105, plate: "7", chain: "10A", rigidLeather: "10B", softLeather: "13B", none: "11C" },
        { min: 106, max: 110, plate: "8A", chain: "13B", rigidLeather: "12B", softLeather: "14B", none: "13C" },
        { min: 111, max: 115, plate: "9A", chain: "14B", rigidLeather: "13B", softLeather: "16C", none: "15C" },
        { min: 116, max: 120, plate: "10A", chain: "16B", rigidLeather: "15C", softLeather: "17C", none: "16D" },
        { min: 121, max: 125, plate: "11B", chain: "17C", rigidLeather: "17C", softLeather: "19D", none: "18D" },
        { min: 126, max: 130, plate: "11B", chain: "19C", rigidLeather: "19D", softLeather: "20D", none: "20D" },
        { min: 131, max: 135, plate: "12C", chain: "20D", rigidLeather: "21D", softLeather: "22D", none: "22E" },
        { min: 136, max: 140, plate: "13C", chain: "22D", rigidLeather: "23D", softLeather: "23E", none: "23E" },
        { min: 141, max: 145, plate: "14D", chain: "23E", rigidLeather: "25E", softLeather: "25E", none: "25E" },
        { min: 146, max: 150, plate: "15E", chain: "25E", rigidLeather: "26E", softLeather: "26E", none: "27E" },
    ],
    
    "Tooth & Claw TINY": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 51, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "2" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "1", none: "4" },
        { min: 61, max: 65, plate: "1", chain: "1", rigidLeather: "1", softLeather: "2", none: "5T" },
        { min: 66, max: 70, plate: "2", chain: "2", rigidLeather: "2", softLeather: "4", none: "6T" },
        { min: 71, max: 75, plate: "3", chain: "3", rigidLeather: "3", softLeather: "5", none: "8T" },
        { min: 76, max: 80, plate: "4", chain: "4", rigidLeather: "5", softLeather: "7T", none: "9A" },
        { min: 81, max: 85, plate: "5", chain: "5", rigidLeather: "7T", softLeather: "9T", none: "10A" },
    ],
    "Tooth & Claw SMALL": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 51, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "2" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "1", none: "4" },
        { min: 61, max: 65, plate: "1", chain: "1", rigidLeather: "1", softLeather: "2", none: "5T" },
        { min: 66, max: 70, plate: "2", chain: "2", rigidLeather: "2", softLeather: "4", none: "6T" },
        { min: 71, max: 75, plate: "3", chain: "3", rigidLeather: "3", softLeather: "5", none: "8T" },
        { min: 76, max: 80, plate: "4", chain: "4", rigidLeather: "5", softLeather: "7T", none: "9A" },
        { min: 81, max: 85, plate: "5", chain: "5", rigidLeather: "7T", softLeather: "9T", none: "10A" },
        { min: 86, max: 90, plate: "6", chain: "6T", rigidLeather: "8T", softLeather: "10A", none: "12A" },
        { min: 91, max: 95, plate: "6T", chain: "7T", rigidLeather: "9A", softLeather: "11A", none: "13B" },
        { min: 96, max: 100, plate: "7T", chain: "8A", rigidLeather: "10A", softLeather: "12A", none: "14B" },
        { min: 101, max: 105, plate: "7A", chain: "9A", rigidLeather: "11A", softLeather: "13B", none: "15B" },
    ],
    "Tooth & Claw MEDIUM": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 51, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "2" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "1", none: "4" },
        { min: 61, max: 65, plate: "1", chain: "1", rigidLeather: "1", softLeather: "2", none: "5T" },
        { min: 66, max: 70, plate: "2", chain: "2", rigidLeather: "2", softLeather: "4", none: "6T" },
        { min: 71, max: 75, plate: "3", chain: "3", rigidLeather: "3", softLeather: "5", none: "8T" },
        { min: 76, max: 80, plate: "4", chain: "4", rigidLeather: "5", softLeather: "7T", none: "9A" },
        { min: 81, max: 85, plate: "5", chain: "5", rigidLeather: "7T", softLeather: "9T", none: "10A" },
        { min: 86, max: 90, plate: "6", chain: "6T", rigidLeather: "8T", softLeather: "10A", none: "12A" },
        { min: 91, max: 95, plate: "6T", chain: "7T", rigidLeather: "9A", softLeather: "11A", none: "13B" },
        { min: 96, max: 100, plate: "7T", chain: "8A", rigidLeather: "10A", softLeather: "12A", none: "14B" },
        { min: 101, max: 105, plate: "7A", chain: "9A", rigidLeather: "11A", softLeather: "13B", none: "15B" },
        { min: 106, max: 110, plate: "8A", chain: "10A", rigidLeather: "12B", softLeather: "15B", none: "17C" },
        { min: 111, max: 115, plate: "9A", chain: "11B", rigidLeather: "13B", softLeather: "16C", none: "19C" },
        { min: 116, max: 120, plate: "10B", chain: "11B", rigidLeather: "14C", softLeather: "17C", none: "20D" },
    ],
    "Tooth & Claw LARGE": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 51, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "2" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "1", none: "4" },
        { min: 61, max: 65, plate: "1", chain: "1", rigidLeather: "1", softLeather: "2", none: "5T" },
        { min: 66, max: 70, plate: "2", chain: "2", rigidLeather: "2", softLeather: "4", none: "6T" },
        { min: 71, max: 75, plate: "3", chain: "3", rigidLeather: "3", softLeather: "5", none: "8T" },
        { min: 76, max: 80, plate: "4", chain: "4", rigidLeather: "5", softLeather: "7T", none: "9A" },
        { min: 81, max: 85, plate: "5", chain: "5", rigidLeather: "7T", softLeather: "9T", none: "10A" },
        { min: 86, max: 90, plate: "6", chain: "6T", rigidLeather: "8T", softLeather: "10A", none: "12A" },
        { min: 91, max: 95, plate: "6T", chain: "7T", rigidLeather: "9A", softLeather: "11A", none: "13B" },
        { min: 96, max: 100, plate: "7T", chain: "8A", rigidLeather: "10A", softLeather: "12A", none: "14B" },
        { min: 101, max: 105, plate: "7A", chain: "9A", rigidLeather: "11A", softLeather: "13B", none: "15B" },
        { min: 106, max: 110, plate: "8A", chain: "10A", rigidLeather: "12B", softLeather: "15B", none: "17C" },
        { min: 111, max: 115, plate: "9A", chain: "11B", rigidLeather: "13B", softLeather: "16C", none: "19C" },
        { min: 116, max: 120, plate: "10B", chain: "11B", rigidLeather: "14C", softLeather: "17C", none: "20D" },
        { min: 121, max: 125, plate: "14B", chain: "15B", rigidLeather: "18C", softLeather: "20C", none: "26D" },
        { min: 126, max: 130, plate: "16B", chain: "18C", rigidLeather: "20C", softLeather: "23D", none: "28E" },
        { min: 131, max: 135, plate: "18C", chain: "20C", rigidLeather: "22D", softLeather: "25D", none: "30E" },
    ],
    "Tooth & Claw HUGE": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 45, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 46, max: 50, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 51, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "2" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "1", none: "4" },
        { min: 61, max: 65, plate: "1", chain: "1", rigidLeather: "1", softLeather: "2", none: "5T" },
        { min: 66, max: 70, plate: "2", chain: "2", rigidLeather: "2", softLeather: "4", none: "6T" },
        { min: 71, max: 75, plate: "3", chain: "3", rigidLeather: "3", softLeather: "5", none: "8T" },
        { min: 76, max: 80, plate: "4", chain: "4", rigidLeather: "5", softLeather: "7T", none: "9A" },
        { min: 81, max: 85, plate: "5", chain: "5", rigidLeather: "7T", softLeather: "9T", none: "10A" },
        { min: 86, max: 90, plate: "6", chain: "6T", rigidLeather: "8T", softLeather: "10A", none: "12A" },
        { min: 91, max: 95, plate: "6T", chain: "7T", rigidLeather: "9A", softLeather: "11A", none: "13B" },
        { min: 96, max: 100, plate: "7T", chain: "8A", rigidLeather: "10A", softLeather: "12A", none: "14B" },
        { min: 101, max: 105, plate: "7A", chain: "9A", rigidLeather: "11A", softLeather: "13B", none: "15B" },
        { min: 106, max: 110, plate: "8A", chain: "10A", rigidLeather: "12B", softLeather: "15B", none: "17C" },
        { min: 111, max: 115, plate: "9A", chain: "11B", rigidLeather: "13B", softLeather: "16C", none: "19C" },
        { min: 116, max: 120, plate: "10B", chain: "11B", rigidLeather: "14C", softLeather: "17C", none: "20D" },
        { min: 121, max: 125, plate: "14B", chain: "15B", rigidLeather: "18C", softLeather: "20C", none: "26D" },
        { min: 126, max: 130, plate: "16B", chain: "18C", rigidLeather: "20C", softLeather: "23D", none: "28E" },
        { min: 131, max: 135, plate: "18C", chain: "20C", rigidLeather: "22D", softLeather: "25D", none: "30E" },
        { min: 136, max: 140, plate: "20C", chain: "23D", rigidLeather: "26D", softLeather: "30E", none: "36E" },
        { min: 141, max: 145, plate: "22D", chain: "25D", rigidLeather: "29E", softLeather: "33E", none: "38E" },
        { min: 146, max: 150, plate: "24E", chain: "27E", rigidLeather: "32E", softLeather: "36E", none: "40E" },
    ],
    "Grappling & Unbalancing TINY": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 66, max: 70, plate: "2T", chain: "1", rigidLeather: "0", softLeather: "1", none: "1" },
        { min: 71, max: 75, plate: "2A", chain: "2T", rigidLeather: "1", softLeather: "3", none: "2" },
        { min: 76, max: 80, plate: "3A", chain: "3T", rigidLeather: "2", softLeather: "4T", none: "4" },
        { min: 81, max: 85, plate: "3A", chain: "4A", rigidLeather: "4T", softLeather: "6T", none: "5" },
    ],
    "Grappling & Unbalancing SMALL": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 66, max: 70, plate: "2T", chain: "1", rigidLeather: "0", softLeather: "1", none: "1" },
        { min: 71, max: 75, plate: "2A", chain: "2T", rigidLeather: "1", softLeather: "3", none: "2" },
        { min: 76, max: 80, plate: "3A", chain: "3T", rigidLeather: "2", softLeather: "4T", none: "4" },
        { min: 81, max: 85, plate: "3A", chain: "4A", rigidLeather: "4T", softLeather: "6T", none: "5" },
        { min: 86, max: 90, plate: "4A", chain: "4A", rigidLeather: "5T", softLeather: "7T", none: "7T" },
        { min: 91, max: 95, plate: "4A", chain: "5A", rigidLeather: "6T", softLeather: "8A", none: "8T" },
        { min: 96, max: 100, plate: "5B", chain: "6A", rigidLeather: "7A", softLeather: "9A", none: "10T" },
        { min: 101, max: 105, plate: "5B", chain: "7A", rigidLeather: "8A", softLeather: "10A", none: "11A" },
    ],
    "Grappling & Unbalancing MEDIUM": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 66, max: 70, plate: "2T", chain: "1", rigidLeather: "0", softLeather: "1", none: "1" },
        { min: 71, max: 75, plate: "2A", chain: "2T", rigidLeather: "1", softLeather: "3", none: "2" },
        { min: 76, max: 80, plate: "3A", chain: "3T", rigidLeather: "2", softLeather: "4T", none: "4" },
        { min: 81, max: 85, plate: "3A", chain: "4A", rigidLeather: "4T", softLeather: "6T", none: "5" },
        { min: 86, max: 90, plate: "4A", chain: "4A", rigidLeather: "5T", softLeather: "7T", none: "7T" },
        { min: 91, max: 95, plate: "4A", chain: "5A", rigidLeather: "6T", softLeather: "8A", none: "8T" },
        { min: 96, max: 100, plate: "5B", chain: "6A", rigidLeather: "7A", softLeather: "9A", none: "10T" },
        { min: 101, max: 105, plate: "5B", chain: "7A", rigidLeather: "8A", softLeather: "10A", none: "11A" },
        { min: 106, max: 110, plate: "6C", chain: "8B", rigidLeather: "10A", softLeather: "12B", none: "14A" },
        { min: 111, max: 115, plate: "7C", chain: "9C", rigidLeather: "11B", softLeather: "13B", none: "15A" },
        { min: 116, max: 120, plate: "8C", chain: "10C", rigidLeather: "12B", softLeather: "14C", none: "16B" },
    ],
    "Grappling & Unbalancing LARGE": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 66, max: 70, plate: "2T", chain: "1", rigidLeather: "0", softLeather: "1", none: "1" },
        { min: 71, max: 75, plate: "2A", chain: "2T", rigidLeather: "1", softLeather: "3", none: "2" },
        { min: 76, max: 80, plate: "3A", chain: "3T", rigidLeather: "2", softLeather: "4T", none: "4" },
        { min: 81, max: 85, plate: "3A", chain: "4A", rigidLeather: "4T", softLeather: "6T", none: "5" },
        { min: 86, max: 90, plate: "4A", chain: "4A", rigidLeather: "5T", softLeather: "7T", none: "7T" },
        { min: 91, max: 95, plate: "4A", chain: "5A", rigidLeather: "6T", softLeather: "8A", none: "8T" },
        { min: 96, max: 100, plate: "5B", chain: "6A", rigidLeather: "7A", softLeather: "9A", none: "10T" },
        { min: 101, max: 105, plate: "5B", chain: "7A", rigidLeather: "8A", softLeather: "10A", none: "11A" },
        { min: 106, max: 110, plate: "6C", chain: "8B", rigidLeather: "10A", softLeather: "12B", none: "14A" },
        { min: 111, max: 115, plate: "7C", chain: "9C", rigidLeather: "11B", softLeather: "13B", none: "15A" },
        { min: 116, max: 120, plate: "8C", chain: "10C", rigidLeather: "12B", softLeather: "14C", none: "16B" },
        { min: 121, max: 125, plate: "10D", chain: "11C", rigidLeather: "14B", softLeather: "16C", none: "18B" },
        { min: 126, max: 130, plate: "11D", chain: "13D", rigidLeather: "16C", softLeather: "18C", none: "20B" },
        { min: 131, max: 135, plate: "12D", chain: "15D", rigidLeather: "18C", softLeather: "20D", none: "22C" },
    ],
    "Grappling & Unbalancing HUGE": [
        { min: 1, max: 8, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 9, max: 55, plate: "0", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 56, max: 60, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "0" },
        { min: 61, max: 65, plate: "1", chain: "0", rigidLeather: "0", softLeather: "0", none: "1" },
        { min: 66, max: 70, plate: "2T", chain: "1", rigidLeather: "0", softLeather: "1", none: "1" },
        { min: 71, max: 75, plate: "2A", chain: "2T", rigidLeather: "1", softLeather: "3", none: "2" },
        { min: 76, max: 80, plate: "3A", chain: "3T", rigidLeather: "2", softLeather: "4T", none: "4" },
        { min: 81, max: 85, plate: "3A", chain: "4A", rigidLeather: "4T", softLeather: "6T", none: "5" },
        { min: 86, max: 90, plate: "4A", chain: "4A", rigidLeather: "5T", softLeather: "7T", none: "7T" },
        { min: 91, max: 95, plate: "4A", chain: "5A", rigidLeather: "6T", softLeather: "8A", none: "8T" },
        { min: 96, max: 100, plate: "5B", chain: "6A", rigidLeather: "7A", softLeather: "9A", none: "10T" },
        { min: 101, max: 105, plate: "5B", chain: "7A", rigidLeather: "8A", softLeather: "10A", none: "11A" },
        { min: 106, max: 110, plate: "6C", chain: "8B", rigidLeather: "10A", softLeather: "12B", none: "14A" },
        { min: 111, max: 115, plate: "7C", chain: "9C", rigidLeather: "11B", softLeather: "13B", none: "15A" },
        { min: 116, max: 120, plate: "8C", chain: "10C", rigidLeather: "12B", softLeather: "14C", none: "16B" },
        { min: 121, max: 125, plate: "10D", chain: "11C", rigidLeather: "14B", softLeather: "16C", none: "18B" },
        { min: 126, max: 130, plate: "11D", chain: "13D", rigidLeather: "16C", softLeather: "18C", none: "20B" },
        { min: 131, max: 135, plate: "12D", chain: "15D", rigidLeather: "18C", softLeather: "20D", none: "22C" },
        { min: 136, max: 140, plate: "14E", chain: "19D", rigidLeather: "22C", softLeather: "26D", none: "28C" },
        { min: 141, max: 145, plate: "16E", chain: "21E", rigidLeather: "25D", softLeather: "28D", none: "30C" },
        { min: 146, max: 150, plate: "18E", chain: "23E", rigidLeather: "27E", softLeather: "30E", none: "33D" },
    ]
};

// Função para criar um novo container de combate
function criarCombateContainer() {
    const combateContainer = document.createElement("div");
    combateContainer.classList.add("combate-container");

    // Conteúdo principal do combate
    combateContainer.innerHTML = `
        
        <div class="combate-content">
            <label for="atacante">Atacante:</label>
            <input type="text" class="atacante" placeholder="Nome do Atacante">

            <label for="ob">OB (Offensive Bonus):</label>
            <input type="number" class="ob" placeholder="OB do Atacante">

            <label for="defensor">Defensor:</label>
            <input type="text" class="defensor" placeholder="Nome do Defensor">

            <label for="db">DB (Defensive Bonus):</label>
            <input type="number" class="db" placeholder="DB do Defensor">

            <label for="tipoAtaque">Tipo de Ataque:</label>
            <select class="tipoAtaque">
                <option value="1H Slash">1H Slash</option>
                <option value="1H Concussion">1H Concussion</option>
                <option value="2H Weapons">2H Weapons</option>
                <option value="Missile">Missile</option>
                <option value="Tooth & Claw TINY">Tooth & Claw TINY</option>
                <option value="Tooth & Claw SMALL">Tooth & Claw SMALL</option>
                <option value="Tooth & Claw MEDIUM">Tooth & Claw MEDIUM</option>
                <option value="Tooth & Claw LARGE">Tooth & Claw LARGE</option>
                <option value="Tooth & Claw HUGE">Tooth & Claw HUGE</option>
                <option value="Grappling & Unbalancing TINY">Grappling & Unbalancing TINY</option>
                <option value="Grappling & Unbalancing SMALL">Grappling & Unbalancing SMALL</option>
                <option value="Grappling & Unbalancing MEDIUM">Grappling & Unbalancing MEDIUM</option>
                <option value="Grappling & Unbalancing LARGE">Grappling & Unbalancing LARGE</option>
                <option value="Grappling & Unbalancing HUGE">Grappling & Unbalancing HUGE</option>
            </select>

            <label for="armadura">Armadura do Defensor:</label>
            <select class="armadura">
                <option value="plate">Plate</option>
                <option value="chain">Chain</option>
                <option value="rigidLeather">Rigid Leather</option>
                <option value="softLeather">Soft Leather</option>
                <option value="none">None</option>
            </select>

            <label for="dado">Dado:</label>
            <input type="number" class="dado" placeholder="1-100">

            <button class="resolverCombate">Resolver Combate</button>

            <div class="resultado"></div>
        </div>
        
        <div class="sidebar">
            <button id="fecharContainer">X</button>
            <h3>MODS</h3>
            <label><input type="checkbox" class="modificador" value="flank"> Flank (+15)</label>
            <label><input type="checkbox" class="modificador" value="rear"> Rear (+20)</label>
            <label><input type="checkbox" class="modificador" value="surprise"> Surprise (+20)</label>
            <label><input type="checkbox" class="modificador" value="stunned"> Stunned (+20)</label>
            <label><input type="checkbox" class="modificador" value="drawing"> Drawing (-30)</label>
            <label><input type="checkbox" class="modificador" value="hp-half"> HP/2 (-20)</label>
            <label><input type="checkbox" class="modificador" value="10+move"> 20' Move (-10)</label>
        </div>
        
    `;

    // Adicionar evento ao botão "fechar"
    const fecharButton = combateContainer.querySelector("#fecharContainer");
    fecharButton.addEventListener("click", () => {
        combateContainer.remove();
    });

    
    // Adicionar evento ao botão "Resolver Combate"
    const resolverButton = combateContainer.querySelector(".resolverCombate");
    resolverButton.addEventListener("click", () => {
        resolverCombate(combateContainer);
    });

    // Adicionar o container ao DOM
    document.getElementById("combatesContainer").appendChild(combateContainer);
}

// Função para calcular o ROLL com modificações
function calcularRollComModificacoes(container) {
    const dado = parseInt(container.querySelector(".dado").value);
    const ob = parseInt(container.querySelector(".ob").value);
    const db = parseInt(container.querySelector(".db").value);

    // Inicializa o ROLL com o valor base
    let roll = dado + ob - db;

    // Verifica cada modificador selecionado e ajusta o ROLL
    const modificadores = container.querySelectorAll(".modificador:checked");
    modificadores.forEach(mod => {
        switch (mod.value) {
            case "flank":
                roll += 15;
                break;
            case "rear":
                roll += 20;
                break;
            case "surprise":
                roll += 20;
                break;
            case "stunned":
                roll += 20;
                break;
            case "drawing":
                roll -= 30;
                break;
            case "hp-half":
                roll -= 20;
                break;
            case "10+move":
                roll -= 10;
                break;
        }
    });

    return roll;
}

// Função para resolver o combate em um container específico
function resolverCombate(container) {
    const atacante = container.querySelector(".atacante").value.trim();
    const ob = parseInt(container.querySelector(".ob").value);
    const defensor = container.querySelector(".defensor").value.trim();
    const db = parseInt(container.querySelector(".db").value);
    const tipoAtaque = container.querySelector(".tipoAtaque").value;
    const armadura = container.querySelector(".armadura").value;
    const dado = parseInt(container.querySelector(".dado").value);

    // Validação dos campos
    if (!atacante || !defensor || isNaN(ob) || isNaN(db) || isNaN(dado)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (!tabelasResolucao[tipoAtaque] || !tabelasResolucao[tipoAtaque][0][armadura]) {
        alert("Tipo de ataque ou armadura inválido.");
        return;
    }

    // Calcular o ROLL com modificações
    const ROLL = calcularRollComModificacoes(container);

    // Determinar o resultado com base na tabela de resolução
    const tabela = tabelasResolucao[tipoAtaque];
    let resultado = "0"; // Valor padrão se nenhuma faixa for encontrada

    for (const faixa of tabela) {
        if (ROLL >= faixa.min && ROLL <= faixa.max) {
            resultado = faixa[armadura]; // Pega o resultado (ex: "13B")
            break;
        }
    }

    // Separar dano e crítico
    let [dano, critico] = resultado.split(/(\d+)(\D*)/).filter(Boolean);
    let danoFinal = parseInt(dano) || 0; // Converte para número (ou 0 se não houver dano)
    let criticoFinal = critico || ""; // Crítico (ou vazio se não houver)

    // Exibir a mensagem
    let mensagem = `${atacante} ataca ${defensor}: `;
    mensagem += `ROLL = ${ROLL}. `;

    if (ROLL < tabela[0].min) {
        mensagem += "Fumble!";
    } else if (ROLL > tabela[tabela.length - 1].max) {
        mensagem += "Fundo de tabela!";
        resultado = tabela[tabela.length - 1][armadura]; // Atualiza o resultado para o último da tabela

        // Recalcula danoFinal e criticoFinal com o novo resultado
        const [dano, critico] = resultado.split(/(\d+)(\D*)/).filter(Boolean);
        danoFinal = parseInt(dano) || 0;
        criticoFinal = critico || "";

        mensagem += ` Causou ${danoFinal} de dano`;
        if (criticoFinal) {
            mensagem += ` com crítico ${criticoFinal}.`;
        } else {
            mensagem += ".";
        }
    } else {
        mensagem += `Causou ${danoFinal} de dano`;
        if (criticoFinal) {
            mensagem += ` com crítico ${criticoFinal}.`;
        } else {
            mensagem += ".";
        }
    }

    // Atualizar o conteúdo do elemento .resultado no container
    const resultadoElement = container.querySelector(".resultado");
    resultadoElement.innerHTML = `
        <div>${mensagem}</div>
    `;

    // Limpar apenas o campo 'dado' após o cálculo
    container.querySelector(".dado").value = "";
}

// Adicionar evento ao botão "Adicionar Combate"
document.getElementById("adicionarCombate").addEventListener("click", criarCombateContainer);

// Criar o primeiro combate ao carregar a página
window.onload = criarCombateContainer;