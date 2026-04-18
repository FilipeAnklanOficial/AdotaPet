import { Card } from "@/components/ui/card";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

interface AnimalType {
  img: string;
  name: string;
  gender: "Macho" | "Fêmea";
  porte: "Pequeno" | "Médio" | "Grande";
  local: string;
}
export const Tela2 = (): JSX.Element => {
  const [btcbrl, setBtcbrl] = useState<any>({});
  const money = async () => {
    try {
      const response = await axios.get(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL",
      );
      console.log(response.data);
      setBtcbrl(response.data.BTCBRL);
    } catch (error) {
      console.error("Deu errado");
    }
  };
  useEffect(() => {
    money();
  }, []);

  const animal: AnimalType[] = [
    {
      img: "https://static.wixstatic.com/media/a87918_a1d2656045414ee9989e64213b252b37~mv2_d_4368_2912_s_4_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a87918_a1d2656045414ee9989e64213b252b37~mv2_d_4368_2912_s_4_2.jpg",
      name: "Max",
      gender: "Macho",
      porte: "Grande",
      local: "São Paulo - SP",
    },
    {
      img: "https://premierpet.com.br/wp-content/uploads/2023/12/model-banner-siames-mobile-v1.png",
      name: "Luna",
      gender: "Fêmea",
      porte: "Médio",
      local: "Rio de Janeiro - RJ",
    },
    {
      img: "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg",
      name: "Caramelo",
      gender: "Macho",
      porte: "Médio",
      local: "Belo Horizonte - MG",
    },
    {
      img: "https://vetex.vet.br/blog/wp-content/uploads/2021/12/gato-persa.png",
      name: "Pérola",
      gender: "Fêmea",
      porte: "Pequeno",
      local: "Curitiba - PR",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1ueQF0YfuNZeWi4wHz_wMl5YlZFovPaLdQ&s",
      name: "Buddy",
      gender: "Macho",
      porte: "Grande",
      local: "Porto Alegre - RS",
    },
    {
      img: "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
      name: "Sombra",
      gender: "Fêmea",
      porte: "Médio",
      local: "Salvador - BA",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mops_oct09_cropped.jpg",
      name: "Thor",
      gender: "Macho",
      porte: "Pequeno",
      local: "Brasília - DF",
    },
    {
      img: "https://petanjo.com/blog/wp-content/uploads/2021/07/maine-coon.jpg",
      name: "Nala",
      gender: "Fêmea",
      porte: "Grande",
      local: "Florianópolis - SC",
    },
  ];

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-4">
        {animal.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {pet.name}
              </h2>

              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">Gênero:</span>{" "}
                  {pet.gender}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Porte:</span>{" "}
                  {pet.porte}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Local:</span>{" "}
                  {pet.local}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
