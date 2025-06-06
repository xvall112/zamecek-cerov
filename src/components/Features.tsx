import { TreeDeciduous, Mountain, SquareParking, Bike } from "lucide-react";

const Features = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center group rounded-md border border-border p-6">
            <div className="flex items-center justify-between gap-4">
              <TreeDeciduous className="size-16 text-(--primary)" />
              <p className=" text-xl font-semibold">Velká zahrada a ohniště</p>
            </div>
          </div>
          <div className="group flex items-center rounded-md border border-border p-6">
            <div className="flex items-center justify-between gap-4">
              <Mountain className="size-16 text-(--primary)" />
              <p className=" text-xl font-semibold ">Solná jeskyně</p>
            </div>
          </div>
          <div className="group flex items-center  rounded-md border border-border p-6">
            <div className="flex items-center justify-between gap-4">
              <SquareParking className="size-16 text-(--primary)" />
              <p className=" text-xl font-semibold">Bezplatné parkování</p>
            </div>
          </div>
          <div className="group flex items-center rounded-md border border-border p-6">
            <div className="flex items-center justify-between gap-4">
              <Bike className="size-16 text-(--primary)" />
              <p className=" text-xl font-semibold">
                Uzamykatelný přístřešek na kola
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
