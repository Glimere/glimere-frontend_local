"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GetProductResponse, Product } from "@/types/products";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ApparelTypes = [
  {
    value: "dress",
    label: "Dress",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924585/type-dress_f2ydyq.svg",
  },
  {
    value: "top",
    label: "Top",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924586/type-top_esxhsm.svg",
  },
  {
    value: "bottom",
    label: "Bottom",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924407/type-bottom_yemskb.svg",
  },
  {
    value: "full-wear",
    label: "Full Wear",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924748/type-full-wear_hk1dzb.svg",
  },
  {
    value: "outer-wear",
    label: "Outer Wear",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924585/type-outer-wear_rwxfmt.svg",
  },
  {
    value: "accessory",
    label: "Accessory",
    image:
      "https://res.cloudinary.com/dwnvlaitr/image/upload/v1747924586/type-accessory_tl0vp5.svg",
  },
];

const units = [
  {
    type: "Metric",
    label: "metric",
    description: "Meters (m), centimeters (cm), millimeters (mm)",
  },
  {
    type: "Imperial",
    label: "imperial",
    description: "Inches (in), feet (ft), yards (yd), miles (mi)",
  },
  {
    type: "Mixed",
    label: "mixed",
    description: "Metric and Imperial units",
  },
];

export default function ApparelDetail({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [selectedType, setSelectedType] = useState("dress");
  const [sizingType, setSizingType] = useState("metric");
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleDiscount, setToggleDiscount] = useState(false);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    status: "",
    image: "",
    price: 0,
    quantity: 0,
    createdAt: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (searchParams?.id === "new") {
        setProduct({
          id: 0,
          name: "",
          description: "",
          status: "",
          image: "",
          price: 0,
          quantity: 0,
          createdAt: "",
        });
      } else {
        try {
          const res = await fetch(
            `http://localhost:3000/creators/api/products/${searchParams?.id}`,
            {
              cache: "no-store",
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fetch product");
          }

          const data = (await res.json()) as GetProductResponse;
          setProduct(data.product);
        } catch (error) {
          console.error("Error fetching product:", error);
          // Provide a fallback product or throw depending on your use case
          return <div>Error loading product</div>;
        }
      }
    };
    fetchProduct();
  }, [searchParams?.id]);

  return (
    <main className="grid flex-1 items-start gap-4 px-[25px] py-4 sm:py-0 sm:pt-8 md:gap-8 md:px-[5.75rem]">
      <div className="mx-auto grid w-full flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {product.name}
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            In stock
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Apparel</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Apparel Details</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue="Gamer Gear Pro Controller"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                      className="min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Apparel Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-between gap-[12px]">
                  {ApparelTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`flex h-[99px] flex-1 cursor-pointer flex-col items-center justify-center gap-[10px] rounded-[8px] border border-solid p-[9px] duration-150 ${selectedType === type.value ? "border-primary-100 bg-[#ed753428]" : "border-dark"}`}
                      onClick={() => setSelectedType(type.value)}
                    >
                      <div className="h-[30px] w-[30px]">
                        <Image
                          alt={type.label}
                          src={type.image}
                          width={20}
                          height={20}
                          className="aspect-square h-full w-full rounded-md object-cover"
                        />
                      </div>

                      <span className="text-[13px]">{type.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Apparel Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="grid gap-3">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category" aria-label="Select category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subcategory">Subcategory</Label>
                    <Select>
                      <SelectTrigger
                        id="subcategory"
                        aria-label="Select subcategory"
                      >
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                        <SelectItem value="hoodies">Hoodies</SelectItem>
                        <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subcategory">
                      Subsubcategory (optional)
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="subcategory"
                        aria-label="Select subcategory"
                      >
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                        <SelectItem value="hoodies">Hoodies</SelectItem>
                        <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Sizing Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-[10px]">
                  {units.map((unit) => (
                    <div
                      className={`flex flex-1 cursor-pointer flex-col items-start justify-start gap-[10px] rounded-[8px] border p-[12px] duration-150 ${sizingType === unit.label ? "border-primary-100 bg-[#ed753428]" : "border-dark"}`}
                      key={unit.type}
                      onClick={() => setSizingType(unit.label)}
                    >
                      <span className="text-[13px] font-bold">{unit.type}</span>
                      <span className="text-dark-400 text-[11px]">
                        {unit.description}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Stock</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">SKU</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="w-[100px]">Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">GGPC-001</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-1" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-1" type="number" defaultValue="100" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-1" className="sr-only">
                          Price
                        </Label>
                        <Input
                          id="price-1"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="s"
                          variant="outline"
                        >
                          <ToggleGroupItem value="s">S</ToggleGroupItem>
                          <ToggleGroupItem value="m">M</ToggleGroupItem>
                          <ToggleGroupItem value="l">L</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">GGPC-002</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-2" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-2" type="number" defaultValue="143" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-2" className="sr-only">
                          Price
                        </Label>
                        <Input
                          id="price-2"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="m"
                          variant="outline"
                        >
                          <ToggleGroupItem value="s">S</ToggleGroupItem>
                          <ToggleGroupItem value="m">M</ToggleGroupItem>
                          <ToggleGroupItem value="l">L</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">GGPC-003</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-3" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-3" type="number" defaultValue="32" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-3" className="sr-only">
                          Stock
                        </Label>
                        <Input
                          id="price-3"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="s"
                          variant="outline"
                        >
                          <ToggleGroupItem value="s">S</ToggleGroupItem>
                          <ToggleGroupItem value="m">M</ToggleGroupItem>
                          <ToggleGroupItem value="l">L</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="justify-center border-t p-4">
                <Button size="sm" variant="ghost" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  Add Variant
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex items-center justify-between p-6">
              <h2 className="text-lg font-semibold">Add Discount</h2>
              <Switch
                id="discount-toggle"
                checked={toggleDiscount}
                onCheckedChange={setToggleDiscount}
              />
            </Card>

            {toggleDiscount && (
              <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                  <CardTitle>Discount</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">SKU</TableHead>
                        <TableHead className="w-[160px]">
                          Percentage Discount
                        </TableHead>
                        <TableHead className="w-[120px]">Price</TableHead>
                        <TableHead className="w-[120px]">Start Date</TableHead>
                        <TableHead className="w-[120px]">End Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">
                          GGPC-001
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="discount-1" className="sr-only">
                            Discount
                          </Label>
                          <Input
                            id="discount-1"
                            type="number"
                            defaultValue="100"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-1" className="sr-only">
                            Price
                          </Label>
                          <Input
                            id="price-1"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="start-1" className="sr-only">
                            Start Date
                          </Label>
                          <Input
                            id="start-1"
                            type="text"
                            placeholder="MM/DD"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="end-1" className="sr-only">
                            End Date
                          </Label>
                          <Input
                            id="end-1"
                            type="text"
                            placeholder="MM/DD"
                            defaultValue="99.99"
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Apparel Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Apparel Images</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Apparel image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button>
                      <Image
                        alt="Apparel image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button>
                      <Image
                        alt="Apparel image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="text-muted-foreground h-4 w-4" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex w-full flex-row justify-between">
              <Label htmlFor="model-toggle">Add Custom 3D Model</Label>
              <Switch
                id="model-toggle"
                checked={toggleModel}
                onCheckedChange={setToggleModel}
              />
            </div>
            {toggleModel && (
              <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                <CardHeader>
                  <CardTitle>Apparel Models</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <Image
                      alt="Apparel image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="300"
                      src="/placeholder.svg"
                      width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <button>
                        <Image
                          alt="Apparel image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="/placeholder.svg"
                          width="84"
                        />
                      </button>
                      <button>
                        <Image
                          alt="Apparel image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="84"
                          src="/placeholder.svg"
                          width="84"
                        />
                      </button>
                      <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                        <Upload className="text-muted-foreground h-4 w-4" />
                        <span className="sr-only">Upload</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Apparel Materials</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Apparel image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button>
                      <Image
                        alt="Apparel image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button>
                      <Image
                        alt="Apparel image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="text-muted-foreground h-4 w-4" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Archive Apparel</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div></div>
                <Button size="sm" variant="secondary">
                  Archive Apparel
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Apparel</Button>
        </div>
      </div>
    </main>
  );
}
