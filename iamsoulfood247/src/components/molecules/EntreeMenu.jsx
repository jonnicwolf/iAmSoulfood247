import Text from "../common/Text";
import Card from "../layout/Card";


const EntreeMenu = () => {
  return (
    <>
      <Card
        title="FRIED CHICKEN DINNER"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$14.95 · Crispy golden fried chicken served with mashed potatoes & gravy, collard greens, and a cornbread muffin."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="FRIED CHICKEN DINNER"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$14.95 · Crispy golden fried chicken served with mashed potatoes & gravy, collard greens, and a cornbread muffin."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="CATFISH DINNER"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$15.95 · Southern-fried or blackened catfish filet, with seasoned rice, hush puppies, and coleslaw."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="SMOTHERED PORK CHOPS"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$15.95 · Tender pork chops smothered in onion gravy, served with macaroni & cheese and braised cabbage"}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="OXTAIL & GRAVY"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$18.95 · Slow-braised oxtail simmered in rich brown gravy, served with rice & peas, candied yams, and cornbread."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="BBQ RIB PLATE"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$16.95 · St. Louis-style prok ribs glazed with house BBQ sauce, served with baked beans and potato salad."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="MEATLOAF SUPPER"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$13.95 · Home style meatloaf topped with tomato glaze, served with garlic mashed potatoes and green beans."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="CHICKEN & WAFFLES"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$13.95 · Golden friend chicken wings paired with a fluffy waffle, butter, and syrup. Served with fresh fruit."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
      <Card
        title="VEGAN SOUL BOWL"
        style={{ boxShadow: 'none', borderBottom: '1px solid #000' }}
        children={
          <>
            <Text
              content={"$12.95 · Seasoned jackfruit BBQ with collard greens, black-eyed peas, candied yams, and cornbread (plant-based)."}
              textSize="md"
              color="textLight"
            />
          </>
        }
        center
      />
    </>
  );
};

export default EntreeMenu;
