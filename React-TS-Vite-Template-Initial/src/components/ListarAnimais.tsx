import React, { useEffect, useState } from "react";
import { Search, Info, MessageCircle, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import axios from "axios";

interface AnimalType {
  img: string;
  name: string;
  gender: "Macho" | "Fêmea";
  porte: "Pequeno" | "Médio" | "Grande";
  local: string;
}

// setAnimais(
//   response.data.map((item: any) => ({
//     img: item.imagem,
//     name: item.nome,
//     gender: item.sexo,
//     porte: item.porte,
//     local: item.local
//   }))
// );



  // export const ListarAnimais = (): JSX.Element => {
  //   const [btcbrl, setBtcbrl] = useState<any>({});
  //   const money = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/animal",
  //       );
  //       console.log(response.data);
  //       setBtcbrl(response.data.BTCBRL);
  //     } catch (error) {
  //       console.error("Deu errado");
  //     }
  //   };
  //   useEffect(() => {
  //     money();
  //   }, []);

  // const ListarAnimais = () => {
    // const animal: AnimalType[] = [
    // {
    //   img: "https://static.wixstatic.com/media/a87918_a1d2656045414ee9989e64213b252b37~mv2_d_4368_2912_s_4_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a87918_a1d2656045414ee9989e64213b252b37~mv2_d_4368_2912_s_4_2.jpg",
    //   name: "Max",
    //   gender: "Macho",
    //   porte: "Grande",
    //   local: "São Paulo - SP",
    // },
    // {
    //   img: "https://premierpet.com.br/wp-content/uploads/2023/12/model-banner-siames-mobile-v1.png",
    //   name: "Luna",
    //   gender: "Fêmea",
    //   porte: "Médio",
    //   local: "Rio de Janeiro - RJ",
    // },
    // {
    //   img: "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg",
    //   name: "Caramelo",
    //   gender: "Macho",
    //   porte: "Médio",
    //   local: "Belo Horizonte - MG",
    // },
    // {
    //   img: "https://vetex.vet.br/blog/wp-content/uploads/2021/12/gato-persa.png",
    //   name: "Pérola",
    //   gender: "Fêmea",
    //   porte: "Pequeno",
    //   local: "Curitiba - PR",
    // },
    // {
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1ueQF0YfuNZeWi4wHz_wMl5YlZFovPaLdQ&s",
    //   name: "Buddy",
    //   gender: "Macho",
    //   porte: "Grande",
    //   local: "Porto Alegre - RS",
    // },
    // {
    //   img: "https://blog-static.petlove.com.br/wp-content/uploads/2022/05/gato-preto-deitado-Petlove.jpg",
    //   name: "Sombra",
    //   gender: "Fêmea",
    //   porte: "Médio",
    //   local: "Salvador - BA",
    // },
    // {
    //   img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mops_oct09_cropped.jpg",
    //   name: "Thor",
    //   gender: "Macho",
    //   porte: "Pequeno",
    //   local: "Brasília - DF",
    // },
    // {
    //   img: "https://petanjo.com/blog/wp-content/uploads/2021/07/maine-coon.jpg",
    //   name: "Nala",
    //   gender: "Fêmea",
    //   porte: "Grande",
    //   local: "Florianópolis - SC",
    // },
    // ];

const ListarAnimais = () => {
  const [animais, setAnimais] = useState<AnimalType[]>([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await axios.get("http://localhost:8080/animal");

        console.log(response.data);

        setAnimais(
          response.data.map((pet: any) => ({
            img: pet.fotos,
            name: pet.nome,
            gender: pet.sexo,
            porte: pet.porte,
            local: pet.localizacao,
          })),
        );
      } catch (error) {
        console.error("Erro ao buscar animais", error);
      }
    };

    fetchAnimais();
  }, []);

    return (
      <div className="min-h-screen bg-[#F8FAFC] font-sans w-full">
        <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-8">
          <aside className="w-full md:w-1/4 space-y-6">
            <div className="mb-6">
              <h1 className="text-[#36C3FF] text-2xl font-medium m-0">
                Filtros
              </h1>
              <p className="text-[#7085a0] text-sm mt-1">Refine sua busca</p>
            </div>

            <div className="space-y-4">
              <FilterCard label="Tipo de animal">
                <Select>
                  <SelectTrigger className="border-none focus:ring-0">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="cachorro">Cachorro</SelectItem>
                    <SelectItem value="gato">Gato</SelectItem>
                  </SelectContent>
                </Select>
              </FilterCard>

              <FilterCard label="Raça">
                <Select>
                  <SelectTrigger className="border-none focus:ring-0">
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas</SelectItem>
                  </SelectContent>
                </Select>
              </FilterCard>

              <FilterCard label="Sexo">
                <Select>
                  <SelectTrigger className="border-none focus:ring-0">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="macho">Macho</SelectItem>
                    <SelectItem value="femea">Fêmea</SelectItem>
                  </SelectContent>
                </Select>
              </FilterCard>

              <FilterCard label="Localização">
                <Input
                  type="text"
                  placeholder="Digite a localização"
                  className="border-none focus-visible:ring-0 h-9"
                />
              </FilterCard>

              <FilterCard label="Vacinado">
                <Select>
                  <SelectTrigger className="border-none focus:ring-0">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="sim">Sim</SelectItem>
                    <SelectItem value="nao">Não</SelectItem>
                  </SelectContent>
                </Select>
              </FilterCard>

              <Button className="w-full bg-[#36C3FF] hover:bg-[#2db0e8] text-white rounded-xl py-6">
                Aplicar Filtros
              </Button>
            </div>
          </aside>

          <section className="flex-1 bg-violet-200/30 rounded-3xl p-6 min-h-[600px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {animais.map((pet, index) => (
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
                    <h2 className="text-xl font-bold text-gray-800 mb-2 uppercase">
                      {pet.name}
                    </h2>

                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold text-gray-800">
                          Gênero:
                        </span>{" "}
                        {pet.gender}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">
                          Porte:
                        </span>{" "}
                        {pet.porte}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">
                          Local:
                        </span>{" "}
                        {pet.local}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  };

  // Componente auxiliar para os cards de filtro para manter o código limpo
  const FilterCard = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <Card className="p-4 rounded-[30px] border-none shadow-sm">
      <Label className="text-[#7085a0] text-[16px] mb-2 block">{label}</Label>
      {children}
    </Card>
  );

export default ListarAnimais;
