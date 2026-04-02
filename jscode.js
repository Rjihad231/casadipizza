const translations = {
    "en": {
        "pizza1_title": "Veggie Pizza",
        "pizza1_desc": "Fresh dough, rich tomato sauce, melted cheese.",
        "pizza1_price": "20,000 IQD",
        "pizza2_title": "Pepperoni Pizza",
        "pizza2_desc": "Spicy pepperoni, mozzarella, and our signature tomato sauce.",
        "pizza2_price": "25,000 IQD",
        "pizza3_title": "Margherita Pizza",
        "pizza3_desc": "Classic Margherita with fresh basil and mozzarella.",
        "pizza3_price": "22,000 IQD",
        "pizza4_title": "Classic Pizza",
        "pizza4_desc": "Classic Margherita with fresh basil and mozzarella.",
        "pizza4_price": "15,000 IQD",
        "pizza5_title": "Four Cheese Pizza",
        "pizza5_desc": "Four types of cheese with fresh basil and mozzarella.",
        "pizza5_price": "18,000 IQD",
        "pizza6_title": "BBQ Chicken Pizza",
        "pizza6_desc": "BBQ sauce, chicken, mozzarella, and fresh basil.",
        "pizza6_price": "24,000 IQD"
    },
    "ar": {
        "pizza1_title": "بيتزا خضروات",
        "pizza1_desc": "عجينة طازجة، صلصة طماطم غنية، جبنة ذائبة.",
        "pizza1_price": "20,000 دينار عراقي",
        "pizza2_title": "بيتزا بيبروني",
        "pizza2_desc": "بيبروني حار، موزاريلا، وصلصة طماطم مميزة.",
        "pizza2_price": "25,000 دينار عراقي",
        "pizza3_title": "بيتزا مارغريتا",
        "pizza3_desc": "مارغريتا كلاسيكية مع ريحان طازج وموزاريلا.",
        "pizza3_price": "22,000 دينار عراقي",
        "pizza4_title": "بيتزا كلاسيكية",
        "pizza4_desc": "بيتزا كلاسيكية مع ريحان طازج وموزاريلا.",
        "pizza4_price": "15,000 دينار عراقي",
        "pizza5_title": "بيتزا أجبان",
        "pizza5_desc": "أربعة أنواع من الجبن مع ريحان طازج وموزاريلا.",
        "pizza5_price": "18,000 دينار عراقي",
        "pizza6_title": "بيتزا دجاج باربيكيو",
        "pizza6_desc": "صلصة باربيكيو، دجاج، موزاريلا، وريحان طازج.",
        "pizza6_price": "24,000 دينار عراقي"
    },
    "ku": {
        "pizza1_title": "پیتزای سەوزەوات",
        "pizza1_desc": "هەویر تازە، سۆسی تەماتۆی دەوڵەمەند، پەنیرتوو.",
        "pizza1_price": "20,000 دیناری عێراقی",
        "pizza2_title": "پیتزای پپیرۆنی",
        "pizza2_desc": "پپیرۆنی تیژ، مۆزاریلا، و سۆسی تەماتۆی تایبەت.",
        "pizza2_price": "25,000 دیناری عێراقی",
        "pizza3_title": "پیتزای مارگریتا",
        "pizza3_desc": "مارگریتای کلاسیک لەگەڵ ڕەیحانی تازە و مۆزاریلا.",
        "pizza3_price": "22,000 دیناری عێراقی",
        "pizza4_title": "پیتزای کلاسیک",
        "pizza4_desc": "پیتزای کلاسیک لەگەڵ ڕەیحانی تازە و مۆزاریلا.",
        "pizza4_price": "15,000 دیناری عێراقی",
        "pizza5_title": "پیتزای چوار پەنیر",
        "pizza5_desc": "چوار جۆر پەنیر لەگەڵ ڕەیحانی تازە و مۆزاریلا.",
        "pizza5_price": "18,000 دیناری عێراقی",
        "pizza6_title": "پیتزای مریشک باربیکیو",
        "pizza6_desc": "سۆسی باربیکیو، مریشک، مۆزاریلا، و ڕەیحانی تازە.",
        "pizza6_price": "24,000 دیناری عێراقی"
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[language][key];
        if (language === "ar" || language === "ku") {
            element.style.direction = "rtl";
            element.style.textAlign = "right";
        } else {
            element.style.direction = "ltr";
            element.style.textAlign = "left";
        }
    });
}