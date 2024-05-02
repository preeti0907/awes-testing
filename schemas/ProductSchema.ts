export interface Product {
    id: number;
    apin: string;
    product_sku: string;
    product_name: string;
    brand_name: string;
    product_description: string | null;
    additional_information: string | null;
    tags: string[];
    bullet_points: string;
    category_ids: string;
    mrp: string;
    selling_price: string;
    quantity: number;
    manufacturer: string;
    hsn_code: string;
    ppu_count: string;
    part_number: string;
    identifier_type: string;
    identifier_value: string;
    status: string;
    created_at: string;
    updated_at: string;
    deal_id: number;
    database_product_id: number;
    variation_parent_product: any; 
    size_chart_id: number | null;
    deleted_at: string | null;
    gender: string;
    tax: number;
    seller_id: number | null;
    keywords: string | null;
    business_price: string;
    brand_id: number;
    unit: string;
    meta_title: string | null;
    meta_description: string | null;
    unit_measure: string;
    product_type: string | null;
    ingredients: string[];
    concerns: string[];
    reviewcount: number;
    avgrating: number;
    main_image: {
      id: number;
      image: string;
      relation_id: number;
      type: string;
      created_at: string;
      updated_at: string;
      position: number;
    };
    brand: {
      id: number;
      name: string;
      desc: string | null;
      image: string;
      inhomepage: string;
      status: string;
      created_at: string;
      updated_at: string;
      slug: string;
      meta_title: string | null;
      meta_description: string | null;
    };
    review: any[]; // You might want to define a type or interface for this as well
  }
  