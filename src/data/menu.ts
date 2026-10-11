export type DietaryTag = 'Vegan' | 'Oat Milk' | 'Gluten-Free' | 'New' | 'Signature' | 'Sugar-Free';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: DietaryTag[];
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  subcategory: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'specialty-coffee',
    label: 'Specialty Coffee',
    icon: 'Coffee',
    subcategory: 'Hot & Iced Brews',
    items: [
      {
        id: 'classic-espresso',
        name: 'Classic Espresso',
        description: 'Single-origin Ethiopian beans, rich crema, notes of dark chocolate and citrus zest.',
        price: 55,
        tags: ['Signature'],
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Velvety microfoam over a double shot, dusted with cocoa. A timeless classic.',
        price: 70,
        tags: ['Oat Milk'],
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Smooth ristretto shots with steamed milk for a balanced, creamy experience.',
        price: 75,
        tags: ['Oat Milk'],
      },
      {
        id: 'pour-over',
        name: 'Pour-Over Chemex',
        description: 'Hand-poured single-origin with bright acidity and a clean, floral finish.',
        price: 95,
        tags: ['Signature', 'Vegan'],
      },
      {
        id: 'iced-latte',
        name: 'Iced Caramel Latte',
        description: 'House-made caramel syrup, cold milk, and a double shot poured over ice.',
        price: 85,
        tags: ['Oat Milk'],
      },
      {
        id: 'cold-brew',
        name: '24-Hour Cold Brew',
        description: 'Slow-steeped for 24 hours, naturally smooth with low acidity and a sweet finish.',
        price: 90,
        tags: ['Vegan', 'Signature'],
      },
      {
        id: 'spanish-latte',
        name: 'Spanish Latte',
        description: 'Condensed milk meets bold espresso for a rich, sweet, and indulgent cup.',
        price: 80,
        tags: ['New'],
      },
      {
        id: 'matcha-latte',
        name: 'Iced Matcha Latte',
        description: 'Ceremonial-grade matcha whisked with chilled milk and a touch of honey.',
        price: 95,
        tags: ['Vegan', 'New'],
      },
    ],
  },
  {
    id: 'fresh-bakery',
    label: 'Fresh Bakery',
    icon: 'Croissant',
    subcategory: 'Croissants & Pastries',
    items: [
      {
        id: 'butter-croissant',
        name: 'Classic Butter Croissant',
        description: '27-layer laminated dough, baked fresh every morning until golden and flaky.',
        price: 45,
        tags: ['Signature'],
      },
      {
        id: 'almond-croissant',
        name: 'Almond Croissant',
        description: 'Filled with frangipane, topped with toasted almonds and a dusting of sugar.',
        price: 60,
        tags: ['New'],
      },
      {
        id: 'pain-au-chocolat',
        name: 'Pain au Chocolat',
        description: 'Buttery, flaky pastry wrapped around two batons of rich dark chocolate.',
        price: 55,
        tags: [],
      },
      {
        id: 'cinnamon-roll',
        name: 'Cinnamon Roll',
        description: 'Soft, pillowy dough swirled with cinnamon butter and drizzled with cream cheese glaze.',
        price: 50,
        tags: [],
      },
      {
        id: 'sourdough-loaf',
        name: 'Artisan Sourdough Loaf',
        description: 'Naturally leavened, slow-fermented for 18 hours with a crackling crust.',
        price: 65,
        tags: ['Vegan'],
      },
      {
        id: 'vegan-banana-bread',
        name: 'Vegan Banana Bread',
        description: 'Moist, naturally sweetened with ripe bananas and a hint of walnut.',
        price: 40,
        tags: ['Vegan', 'Gluten-Free'],
      },
    ],
  },
  {
    id: 'breakfast-brunch',
    label: 'Breakfast & Brunch',
    icon: 'EggFried',
    subcategory: 'All-Day Kitchen',
    items: [
      {
        id: 'shakshuka',
        name: 'House Shakshuka',
        description: 'Eggs poached in spiced tomato and pepper sauce, served with warm sourdough.',
        price: 140,
        tags: ['Signature'],
      },
      {
        id: 'avocado-toast',
        name: 'Smashed Avocado Toast',
        description: 'Avocado on sourdough with chili flakes, lime, and a soft-poached egg.',
        price: 120,
        tags: ['Gluten-Free'],
      },
      {
        id: 'berry-pancakes',
        name: 'Berry Buttermilk Pancakes',
        description: 'Stack of three fluffy pancakes with fresh berries, maple syrup, and mascarpone.',
        price: 135,
        tags: ['Signature'],
      },
      {
        id: 'french-toast',
        name: 'Brioche French Toast',
        description: 'Thick-cut brioche soaked in vanilla custard, caramelized and topped with honey.',
        price: 130,
        tags: ['New'],
      },
      {
        id: 'vegan-bowl',
        name: 'Power Vegan Bowl',
        description: 'Roasted chickpeas, quinoa, avocado, cherry tomatoes, and tahini dressing.',
        price: 150,
        tags: ['Vegan', 'Gluten-Free'],
      },
      {
        id: 'omelette',
        name: 'Garden Omelette',
        description: 'Three-egg omelette with sautéed mushrooms, spinach, and gruyère cheese.',
        price: 125,
        tags: ['Gluten-Free'],
      },
    ],
  },
  {
    id: 'signature-desserts',
    label: 'Signature Desserts',
    icon: 'CakeSlice',
    subcategory: 'Sweet Endings',
    items: [
      {
        id: 'tiramisu',
        name: 'Classic Tiramisu',
        description: 'Espresso-soaked ladyfingers layered with mascarpone cream and a dusting of cocoa.',
        price: 80,
        tags: ['Signature'],
      },
      {
        id: 'chocolate-lava',
        name: 'Molten Chocolate Lava Cake',
        description: 'Warm dark chocolate cake with a gooey center, served with vanilla bean gelato.',
        price: 95,
        tags: ['Signature'],
      },
      {
        id: 'basque-cheesecake',
        name: 'Basque Burnt Cheesecake',
        description: 'Caramelized top, creamy center, lightly scorched for a deeply rich flavor.',
        price: 85,
        tags: ['New'],
      },
      {
        id: 'baklava',
        name: 'Pistachio Baklava',
        description: 'Layered filo with pistachio and honey syrup. A local favorite, made in-house.',
        price: 65,
        tags: [],
      },
      {
        id: 'vegan-brownie',
        name: 'Vegan Fudge Brownie',
        description: 'Dense, rich, and naturally sweetened with dates and raw cacao.',
        price: 55,
        tags: ['Vegan', 'Sugar-Free'],
      },
      {
        id: 'cardamom-cookie',
        name: 'Cardamom Shortbread',
        description: 'Buttery shortbread infused with ground cardamom and a pinch of sea salt.',
        price: 40,
        tags: [],
      },
    ],
  },
];
