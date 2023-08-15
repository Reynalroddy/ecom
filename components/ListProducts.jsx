
"use client"

import React,{useState,useRef} from 'react'
import { Divider } from 'primereact/divider'
import { Badge } from 'primereact/badge';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputNumber } from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import Image from "next/image";
import Prooduct from './Product';
import Paginations from './Pagination';
import { useRouter, useSearchParams } from "next/navigation";
import { requestToBodyStream } from 'next/dist/server/body-streams';
// import Pagi
const ListProducts = ({data,count,limit}) => {
    console.log(limit);
    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState('');
    const [rangeValue1, setRangeValue1] = useState(0);
    const [rangeValue2, setRangeValue2] = useState(1000);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes1, setSelectedSizes1] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState(['Alfred', 'Hyper']);
    const [selectedFilters, setSelectedFilters] = useState(['Alfred', 'Hyper', 'Black']);
    const [selectedColors2, setSelectedColors2] = useState(['Black']);
    const [selectedSizes2, setSelectedSizes2] = useState([]);
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedColors3, setSelectedColors3] = useState([
        { name: 'Black', class: 'bg-gray-500' }
    ]);
    const [selectedBrands3, setSelectedBrands3] = useState([
        { name: 'Alfred' },
        { name: 'Hyper' }
    ]);
    const [openDropdown, setOpenDropdown] = useState(true);

    const btnRef1 = useRef(null);
    const menu = useRef(null);
    const onSubmit =()=>{
      let queryParams;
      if(rangeValue1 &&rangeValue2){
          queryParams = new URLSearchParams(window.location.search);
    
          if (queryParams.has("price")) {
            queryParams.set("price", `${rangeValue1}-${rangeValue2}`);
          } else {
            queryParams.append("price", `${rangeValue1}-${rangeValue2}`);
          }  

           

    
          const path = window.location.pathname + "?" + queryParams.toString();
          console.log("path", path);
          router.push(path);
          
                  }
                  else{
                      router.push(`/`)
                  }

  }
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const items = [
        { label: 'Color' },
        { label: 'Size' },
        { label: 'Price' }
    ];

    const brands = [
        { name: 'Alfred' },
        { name: 'Hyper' },
        { name: 'Headphones' },
        { name: 'Laptops' },
    ];

    const colors = [
        { name: 'Black', class: 'bg-gray-500' },
        { name: 'Orange', class: 'bg-orange-500' },
        { name: 'Indigo', class: 'bg-indigo-500' },
        { name: 'Pink', class: 'bg-pink-500' },
    ];

    const prices = [
        { range: '$10 - $100' },
        { range: '$101 - $200' },
        { range: '$201 - $300' },
        { range: '$301 - $400' },
    ];

    const sizes = [
        {
            page: [
                { value: '28x28' },
                { value: '28x30' },
                { value: '28x32' },
                { value: '28x34' },
                { value: '29x28' },
                { value: '29x30' },
                { value: '29x32' },
                { value: '29x34' },
                { value: '30x28' },
                { value: '30x30' },
                { value: '30x32' },
                { value: '30x34' },
                { value: '31x28' },
                { value: '31x30' },
                { value: '31x32' },
                { value: '31x34' },
            ]
        },
        {
            page: [
                { value: '32x28' },
                { value: '32x30' },
                { value: '32x32' },
                { value: '32x34' },
                { value: '33x28' },
                { value: '33x30' },
                { value: '33x32' },
                { value: '33x34' },
                { value: '34x28' },
                { value: '34x30' },
                { value: '34x32' },
                { value: '35x34' },
                { value: '35x28' },
                { value: '35x30' },
                { value: '35x32' },
                { value: '35x34' },
            ]
        },
        {
            page: [
                { value: '28x28' },
                { value: '28x30' },
                { value: '28x32' },
                { value: '28x34' },
                { value: '29x28' },
                { value: '29x30' },
                { value: '29x32' },
                { value: '29x34' },
                { value: '30x28' },
                { value: '30x30' },
                { value: '30x32' },
                { value: '30x34' },
                { value: '31x28' },
                { value: '31x30' },
                { value: '31x32' },
                { value: '31x34' },
            ]
        },
    ];

    const onSizeClick = (size) => {
        let _selectedSizes1 = [...selectedSizes1];

        if (_selectedSizes1.indexOf(size.value) == -1) {
            _selectedSizes1.push(size.value);
        }
        else {
            _selectedSizes1.splice(_selectedSizes1.indexOf(size.value.toString()), 1);
        }
        setSelectedSizes1(_selectedSizes1);
    }

    const onColorClick = (color) => {
        let _selectedColors = [...selectedColors];

        if (_selectedColors.indexOf(color) == -1) {
            _selectedColors.push(color);
        }
        else {
            _selectedColors.splice(_selectedColors.indexOf(color), 1);
        }
        setSelectedColors(_selectedColors);
    }

    const onBrandChange = (e) => {
        // let _selectedBrand = [...selectedBrand_1];

        if (e.checked)
            setSelectedBrand(e.value);
        else {
          setSelectedBrand('');
        }

      
    }

    const clearAll = () => {
        setSelectedFilters([]);
        setSelectedColors2([]);
        setSelectedSizes2([]);
        setSelectedBrands([]);
    }

    const onBrandsChange = (e, brand) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedBrands = [...selectedBrands];

        _selectedBrands.indexOf(brand) === -1 ? _selectedBrands.push(brand) : _selectedBrands.splice(_selectedBrands.indexOf(brand), 1);
        _selectedFilters.indexOf(brand) === -1 ? _selectedFilters.push(brand) : _selectedFilters.splice(_selectedFilters.indexOf(brand), 1);

        setSelectedFilters(_selectedFilters);
        setSelectedBrands(_selectedBrands);
    }

    const onColorClick2 = (color) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedColors = [...selectedColors2];

        if (_selectedFilters.indexOf(color) === -1) {
            _selectedFilters.push(color);
            _selectedColors.push(color);

        } else {
            _selectedFilters.splice(_selectedFilters.indexOf(color), 1);
            _selectedColors.splice(_selectedColors.indexOf(color), 1);
        }

        setSelectedColors2(_selectedColors);
        setSelectedFilters(_selectedFilters);
    }

    const onSizeClick2 = (size) => {
        let _selectedFilters = [...selectedFilters];
        let _selectedSizes2 = [...selectedSizes2];

        _selectedSizes2.indexOf(size) === -1 ? _selectedSizes2.push(size) : _selectedSizes2.splice(_selectedSizes2.indexOf(size), 1);
        _selectedFilters.indexOf(size) === -1 ? _selectedFilters.push(size) : _selectedFilters.splice(_selectedFilters.indexOf(size), 1);

        setSelectedFilters(_selectedFilters);
        setSelectedSizes2(_selectedSizes2);
    }


    const removeChip = (filter) => {
        let _selectedFilters = selectedFilters.filter(i => i !== filter);
        let _selectedColors = selectedColors2.filter(i => i !== filter);
        let _selectedBrands = selectedBrands.filter(i => i !== filter);
        let _selectedSizes2 = selectedSizes2.filter(i => i !== filter);

        setSelectedColors2(_selectedColors);
        setSelectedFilters(_selectedFilters);
        setSelectedSizes2(_selectedSizes2);
        setSelectedBrands(_selectedBrands);
    }
  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    {/* <Button title='show' className='px-4'/> */}
{/* <div className="text-900 font-bold text-3xl text-center text-purple-500">Category Title</div> */}
<div className='text-center'>
<Image src='/images/logo.png' width={100} height='48'/>
</div>

<p className="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
<Divider className="w-full" />
<div className="flex flex-wrap lg:flex-nowrap">
    <div className="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
        <div className="flex flex-column p-0">
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
            <a tabIndex="0" className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
        </div>
        <Divider className="w-full m-0 p-0" />

        <Accordion multiple className="-mb-1 mt-3">
            <AccordionTab selected 
            header='Brand'
            >
                <div className="transition-all transition-duration-400 transition-ease-in-out">
                    <div className="mb-3">
                        <span className="p-input-icon-right w-full">
                            <i className="pi pi-search"></i>
                            <InputText placeholder="Search" className="w-full" />
                        </span>
                    </div>
                    <div className="flex w-full justify-content-between">
                        <div className="field-checkbox">
                            <Checkbox value="Headphones" inputId="headphones" 
                            // onChange={onBrandChange} checked={selectedBrand_1.indexOf('Headphones') !== -1}
                            ></Checkbox>
                            <label htmlFor="headphones" className="text-900">Headphones</label>
                        </div>
                        <Badge value={42} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                    </div>
                    <div className="flex w-full justify-content-between">
                        <div className="field-checkbox">
                            <Checkbox value="Hyper" inputId="hyper" 
                            // onChange={onBrandChange} checked={selectedBrand_1.indexOf('Hyper') !== -1}
                            ></Checkbox>
                            <label htmlFor="hyper" className="text-900">Hyper</label>
                        </div>
                        <Badge value={18} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                    </div>
                    <div className="flex w-full justify-content-between">
                        <div className="field-checkbox">
                            <Checkbox value="Bastion" inputId="bastion" 
                            // onChange={onBrandChange} checked={selectedBrand_1.indexOf('Bastion') !== -1}
                            ></Checkbox>
                            <label htmlFor="bastion" className="text-900">Bastion</label>
                        </div>
                        <Badge value={7} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                    </div>
                    <div className="flex w-full justify-content-between">
                        <div className="field-checkbox">
                            <Checkbox value="Peak" inputId="peak" 
                            // onChange={onBrandChange} checked={selectedBrand_1.indexOf('Peak') !== -1}
                            ></Checkbox>
                            <label htmlFor="peak" className="text-900">Peak</label>
                        </div>
                        <Badge value={36} className="mr-2 bg-gray-200 text-gray-900 p-0 border-circle" />
                    </div>
                    <a tabIndex="0" className="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                </div>
            </AccordionTab>
            <AccordionTab selected header="Price Range">
                <div className="transition-all transition-duration-400 transition-ease-in-out">
                    {/* <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="mt-3 mx-auto" style={{ 'maxWidth': '93%' }} /> */}
                    <div className="flex my-4">
                        <InputNumber placeholder="$10" value={rangeValue1} min="10" inputClassName="w-full mr-3" onValueChange={(e) => setRangeValue1(e.value)} />
                        <InputNumber placeholder="$10000" max="10000" value={rangeValue2} inputClassName="w-full" onValueChange={(e) => setRangeValue2(e.value)} />
                    </div>
                    <Button label="Apply" severity="success" text onClick={onSubmit} />
                </div>
            </AccordionTab>
            <AccordionTab selected 
            header='Color'
            >
                <div className="transition-all transition-duration-400 transition-ease-in-out">
                    <div className="grid mb-3">
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Black')}>
                                {selectedColors.indexOf('Black') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Black</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Orange')}>
                                {selectedColors.indexOf('Orange') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Orange</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Indigo')}>
                                {selectedColors.indexOf('Indigo') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Indigo</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Gray')}>
                                {selectedColors.indexOf('Gray') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Gray</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Cyan')}>
                                {selectedColors.indexOf('Cyan') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Cyan</p>
                        </div>
                        <div className="col-4 flex flex-column align-items-center">
                            <div className="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" onClick={() => onColorClick('Pink')}>
                                {selectedColors.indexOf('Pink') !== -1 && <i className="pi pi-check text-2xl text-white"></i>}
                            </div>
                            <p className="text-900 text-center mt-1">Pink</p>
                        </div>
                    </div>
                </div>
            </AccordionTab>
          
        </Accordion>
    </div>
    <div className="w-full  surface-section mt-3 lg:mt-0" style={{ minHeight: '25rem' }}>

    <div className="grid -mt-3 -ml-3 -mr-3">
   {data.map((item,i)=>{
return <Prooduct key={i} item={item}/>

   })}

</div>


<Paginations resPerPage={limit}
              productsCount={count}/>
    </div>
</div>
</div>
  )
}

export default ListProducts



