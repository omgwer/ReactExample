import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {   // TODO: так делаем или нет
    product: IProduct
}

export function Product({product}: ProductProps) {  // сахар над ProductProps.product
    const [details, setDetails] = useState(false)

    const bthBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border bg-yellow-400', bthBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            {product.title}
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide details' : "Show details"}
            </button>

            {details &&
                <div>
                    <p>{product.description}</p>
                    <p>
                        Rate:
                        <span style={{fontWeight: 'bold'}}>{product.rating.rate}  </span>
                    </p>
                </div>
            }
        </div>

    )
}