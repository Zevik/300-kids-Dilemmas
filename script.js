// מערך הדילמות - בסיס הנתונים של האתר
const dilemmas = [
    {
        id: 1,
        title: "הקרונית המשוגעת",
        scenario: "דמיינו שאתם משחקים במשחק וידאו. אתם שולטים בקרונית מהירה על פסים, אבל פתאום הבלמים מפסיקים לעבוד! הקרונית דוהרת קדימה, וישר במסלול שלכם עומדים חמישה פועלים שלא שמים לב לסכנה. אם לא תעשו כלום, הקרונית תפגע בהם. אבל, יש לכם אפשרות אחת: אתם יכולים למשוך בידית שתסיט את הקרונית למסלול צדדי. הבעיה היא שגם על המסלול הצדדי עומד פועל אחד.",
        options: [
            { text: "למשוך בידית ולהסיט את הקרונית למסלול הצדדי", value: "divert" },
            { text: "לא לעשות כלום ולתת לקרונית להמשיך במסלול הראשי", value: "nothing" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי אחת הדילמות המוסריות המפורסמות ביותר! היא מלמדת אותנו על ההבדל בין לעשות מעשה רע ולתת למשהו רע לקרות.</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">📊 הניתוח:</h4>
            <p><strong>אפשרות 1:</strong> אם תסיטו את הקרונית - תצילו 5 חיים במחיר של חיים אחד</p>
            <p><strong>אפשרות 2:</strong> אם לא תעשו כלום - 5 אנשים ייפגעו, אבל אתם לא פעלתם ישירות</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: בחיים אמיתיים, יש הבדל בין לעשות מעשה שגורם נזק לבין לא למנוע נזק. זו הדילמה של "קום ועשה" מול "שב ואל תעשה".</p>`
    },
    {
        id: 2,
        title: "הסוד של החבר או האבדה של הילדה",
        scenario: "יוסי סיפר לכם סוד גדול: הוא בטעות לקח את האוזניות היקרות של דנה מהשולחן בכיתה, ועכשיו הוא מפחד להודות. הוא השביע אתכם לא לגלות. אחר כך, בהפסקה, אתם שומעים את דנה מספרת לחברות בדמעות שהיא חייבת את האוזניות האלה לפרויקט חשוב במוזיקה, ועכשיו היא עלולה לקבל ציון נמוך.",
        options: [
            { text: "לשמור על הסוד של יוסי ולא לגלות כלום", value: "keep_secret" },
            { text: "לספר מה קרה כדי שדנה תקבל את האוזניות בחזרה", value: "tell_truth" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין נאמנות לחבר לבין מניעת נזק מאדם אחר.</p>
        <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-red-800 mb-2">⚖️ שקילת התוצאות:</h4>
            <p><strong>שמירה על הסוד:</strong> יוסי יישאר מרוצה, אבל דנה תסבול ותכשל בפרויקט</p>
            <p><strong>גילוי האמת:</strong> יוסי יהיה כועס, אבל דנה תיצל מנזק גדול</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: כשצריך לבחור בין טובת אדם אחד לטובת אדם אחר, כדאי לחשוב מי יסבול יותר. במקרה הזה, הנזק לדנה (כישלון בפרויקט) גדול יותר מהנזק ליוסי (אי נעימות).</p>`
    },
    {
        id: 3,
        title: "המורה המבולבל",
        scenario: "יש לכם מורה חדש להיסטוריה, מר כהן. הוא איש ממש נחמד, אבל הוא מאוד מבולבל. הוא מלמד אתכם תאריכים לא נכונים, מתבלבל בין דמויות היסטוריות, ונותן לכולם ציונים שלא מגיעים להם. כל הכיתה מרגישה שהיא לא לומדת כלום והולכת להיכשל במבחן הגדול בסוף השנה.",
        options: [
            { text: "להתלונן על המורה אצל המנהלת", value: "complain" },
            { text: "לא לעשות כלום כדי לא לפגוע במורה הנחמד", value: "stay_quiet" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין רחמים על אדם אחד לבין טובת קבוצה שלמה.</p>
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-yellow-800 mb-2">👥 טובת הכלל נגד טובת הפרט:</h4>
            <p><strong>לא להתלונן:</strong> המורה שומר על עבודתו, אבל 30 תלמידים סובלים</p>
            <p><strong>להתלונן:</strong> המורה עלול לאבד עבודה, אבל הכיתה תקבל חינוך טוב</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: כאשר יש קונפליקט בין טובת אדם אחד לטובת קבוצה גדולה, לרוב טובת הקבוצה קודמת. החינוך של 30 ילדים חשוב יותר מנוחותו של מורה אחד.</p>`
    },
    {
        id: 4,
        title: "הגרפיטי על הקיר",
        scenario: "אתם בשירותים של בית הספר ורואים תלמיד מהכיתה שלכם מקשקש על הקיר עם טוש שחור. אף אחד לא ראה מה קרה מלבדכם.",
        options: [
            { text: "לדווח על התלמיד למורה או למנהל", value: "report" },
            { text: "לא לעשות כלום - אני לא 'שטינקר'", value: "ignore" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין אחריות חברתית לבין נאמנות לחברים.</p>
        <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-green-800 mb-2">🏫 רכוש ציבורי:</h4>
            <p>בית הספר שייך לכולם. כשמישהו מקלקל אותו, זה פוגע בכל התלמידים</p>
            <p>אם כולם ישתקו, המקום יהפוך למבולגן ולא נעים</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: דיווח על הרס רכוש ציבורי זה לא "שטינקרות" - זו אחריות לקהילה. סביבה נקייה ומכובדת היא תועלת לכולם.</p>`
    },
    {
        id: 5,
        title: "החטיף שנגנב מהמכולת",
        scenario: "אתם נכנסים למכולת עם אחותכם הקטנה (בת 8), ורואים אותה מחביאה חטיף שוקולד בכיס בלי לשלם. היא לא שמה לב שראיתם אותה.",
        options: [
            { text: "להעמיד פנים שלא ראיתי כלום", value: "ignore" },
            { text: "לומר לה להחזיר את החטיף או לשלם עליו", value: "confront" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין נוחות רגעית לבין חינוך ואחריות.</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">👶 חינוך הילדה:</h4>
            <p><strong>להתעלם:</strong> נמנעים מעימות, אבל הילדה לא לומדת שגניבה זה רע</p>
            <p><strong>להתערב:</strong> יש עימות לא נעים, אבל הילדה לומדת לקח חשוב על יושר</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: חינוך לקחת אחריות על מעשים זה חשוב יותר מנוחות רגעית. אם נתערב עכשיו, נמנע בעיות גדולות יותר בעתיד.</p>`
    },
    {
        id: 6,
        title: "הכסף שבפח",
        scenario: "המורה הטיל עליכם לנקות את חצר בית הספר. אספתם את כל האשפה לתוך שקית גדולה. רגע לפני שאתם זורקים אותה לפח, אתם מבחינים במעטפה. אתם פותחים אותה ומוצאים בפנים שטר של 50 שקלים. על המעטפה כתוב שם המשפחה של אחד הילדים בכיתה, ובמקרה, זה בדיוק הסכום שצריך לשלם למחרת לטיול השנתי.",
        options: [
            { text: "לשמור את הכסף לעצמי - הרי הוא היה באשפה", value: "keep" },
            { text: "להחזיר את הכסף לילד שהשם שלו על המעטפה", value: "return" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין מה שמותר מבחינה טכנית לבין מה שנכון מבחינה מוסרית.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-purple-800 mb-2">⚖️ חוק מול מוסר:</h4>
            <p><strong>מבחינת החוק:</strong> כסף שנזרק לפח נחשב "אבוד" ואפשר לשמור אותו</p>
            <p><strong>מבחינת המוסר:</strong> ברור שהילד השני יהיה מאושר מאוד לקבל בחזרה את הכסף שהפסיד</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: יש דברים שהם מעבר לחוק. לפעמים העושר האמיתי בא מלעשות את הדבר הנכון, גם כשאף אחד לא מחייב אותנו.</p>`
    },
    {
        id: 7,
        title: "המבחן הקל מדי",
        scenario: "המורה שלכם בחולי, ומורה מחליפה נתנה לכם מבחן. המבחן הוא קל מדי - כל השאלות הן משיעורים מהשנה שעברה, ולא מהחומר שלמדתם השנה. אתם יכולים לענות על הכל ולקבל 100, אבל אתם יודעים שזה לא הוגן כי זה לא מה שהיה אמור להיבחן.",
        options: [
            { text: "לענות על כל השאלות ולקבל 100 - זו הזדמנות!", value: "take_advantage" },
            { text: "להגיד למורה המחליפה שיש טעות במבחן", value: "report_mistake" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין ניצול הזדמנות לבין יושר אקדמי.</p>
        <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-orange-800 mb-2">🎯 יושר לעומת הזדמנותיזם:</h4>
            <p><strong>לנצל את ההזדמנות:</strong> ציון גבוה ללא מאמץ</p>
            <p><strong>להיות ישר:</strong> מבחן הוגן שמראה את הידע האמיתי</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: ציונים שלא מייצגים ידע אמיתי לא באמת עוזרים לנו. יושר אקדמי יוצר סביבת למידה טובה יותר לכולם.</p>`
    },
    {
        id: 8,
        title: "החבר הטובע והילד הרעב",
        scenario: "אתם בדרך למבחן חשוב מאוד, לבושים בבגדים הכי יפים שלכם. פתאום, אתם רואים ילד קטן טובע באגם. אין עוד אף אחד בסביבה. אם תקפצו להציל אותו, תהרסו את הבגדים ותפסידו את המבחן החשוב.",
        options: [
            { text: "לקפוץ מיד למים ולהציל את הילד", value: "save_child" },
            { text: "לחפש מבוגר אחר שיעזור במקומי", value: "find_adult" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין הצלת חיים לבין אינטרסים אישיים.</p>
        <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-red-800 mb-2">🆘 עדיפות הצלת חיים:</h4>
            <p><strong>להציל מיד:</strong> חיי אדם בסכנה מיידית</p>
            <p><strong>לחפש עזרה:</strong> הילד עלול לטבוע בזמן החיפוש</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: חיי אדם חשובים יותר מכל דבר אחר. בגדים אפשר לכבס, מבחן אפשר לחזור עליו, אבל חיים של אדם הם ייחודיים ובלתי חוזרים.</p>`
    },
    {
        id: 9,
        title: "השותף לפרויקט שעומד לעזוב",
        scenario: "אתם עובדים על פרויקט זוגי במדעים, הכי חשוב בשנה. גיליתם במקרה סוד על השותף שלכם, תומר: הוא עומד לעבור דירה לעיר אחרת באמצע הפרויקט, אבל הוא לא סיפר לכם. אם הוא יעזוב, תצטרכו לעשות את כל העבודה לבד ורוב הסיכויים שתקבלו ציון נמוך.",
        options: [
            { text: "לא לעשות כלום - זה עניינו הפרטי", value: "ignore" },
            { text: "לדבר עם המורה על המצב", value: "tell_teacher" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין כבוד לפרטיות לבין הגנה עצמית לגיטימית.</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">⚖️ פרטיות נגד הגינות:</h4>
            <p><strong>לא להתערב:</strong> כבוד לפרטיות של תומר, אבל פגיעה בכם</p>
            <p><strong>לדבר עם המורה:</strong> הגנה על עצמכם ומניעת נזק עתידי</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: כשמידע שמישהו מסתיר עלול לפגוע בנו באופן לא הוגן, יש לנו זכות לגן על עצמנו. הפתרון הטוב ביותר הוא מניעת הנזק מראש.</p>`
    },
    {
        id: 10,
        title: "לעזור לשני היריבים",
        scenario: "שניים מהחברים הטובים שלכם, דני ואלון, מתחרים על אותו תפקיד הנכסף – קפטן נבחרת הכדורסל של בית הספר. שניהם מבקשים מכם לעזור להם להתכונן לאודישן. אתם יודעים שעזרה טובה יכולה לקבוע מי יזכה.",
        options: [
            { text: "לעזור לדני בלבד - הוא חבר יותר ותיק", value: "help_danny" },
            { text: "לעזור לשניהם באופן שווה", value: "help_both" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין נאמנות סלקטיבית לבין הגינות כללית.</p>
        <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-green-800 mb-2">🤝 חברות והגינות:</h4>
            <p><strong>עזרה סלקטיבית:</strong> נאמנות לחבר אחד, אבל עוול לשני</p>
            <p><strong>עזרה שווה:</strong> הגינות כלפי שניהם והזדמנות שווה לכולם</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: הדרך הטובה ביותר היא לתת לכולם הזדמנות שווה להצליח על בסיס הכישרון שלהם. אתם לא השופטים אלא התומכים.</p>`
    },
    {
        id: 11,
        title: "הארנק של הבריון",
        scenario: "בדרך הביתה מבית הספר, מצאתם ארנק על המדרכה. הצצתם פנימה וראיתם שהוא מלא בכסף. ראיתם את תעודת הזהות שבפנים: הארנק שייך לרותם, הבריון של השכבה, זה שכל הזמן מציק לילדים קטנים ולוקח להם את דמי הכיס. אתם יודעים שאם תחזירו לו את הכסף, הוא כנראה ישתמש בו כדי להמשיך להציק לאחרים.",
        options: [
            { text: "להחזיר את הארנק - זה הדבר הישר לעשות", value: "return_wallet" },
            { text: "לא להחזיר - כדי למנוע ממנו להציק לאחרים", value: "keep_wallet" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה מורכבת בין יושר אישי לבין טובת הכלל.</p>
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-yellow-800 mb-2">⚖️ יושר נגד מניעת נזק:</h4>
            <p><strong>להחזיר:</strong> עקרון היושר - לא לגנוב גם מבריון</p>
            <p><strong>לא להחזיר:</strong> מניעת נזק עתידי לילדים חלשים יותר</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: זוהי דילמה קשה! יש לטעון ששמירה על עקרונות היושר חשובה תמיד, אבל יש גם לשקול את הנזק הנמנע. החלטה כזו דורשת חשיבה עמוקה על התוצאות.</p>`
    },
    {
        id: 12,
        title: "לקפוץ על הרימון",
        scenario: "אתם משחקים במשחק אסטרטגיה עם החברים. יש אפשרות לקחת על עצמכם 'משימת הקרבה' שתפסיד אתכם מהמשחק, אבל תציל את כל שאר חברי הקבוצה שלכם ותאפשר להם לנצח. בלי המעשה הזה, כל הקבוצה תפסיד.",
        options: [
            { text: "לקחת על עצמי את המשימה ולהקריב את עצמי למען הקבוצה", value: "sacrifice" },
            { text: "לא להקריב את עצמי ולקוות שמישהו אחר יעשה זאת", value: "wait" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה על הקרבה אישית למען טובת הכלל.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-purple-800 mb-2">🎯 הקרבה עצמית:</h4>
            <p><strong>להקריב:</strong> אתם מפסידים, אבל הקבוצה ניצלת</p>
            <p><strong>לחכות:</strong> אולי יימצא פתרון אחר, אבל סיכון שכולם יפסידו</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: במצבים קיצוניים, הקרבה של היחיד למען הרבים נחשבת לגבורה. המטרה היא התוצאה הטובה ביותר עבור כמה שיותר אנשים.</p>`
    },
    {
        id: 13,
        title: "החתימה המזויפת",
        scenario: "שכחתם לבקש מההורים לחתום על אישור היציאה לטיול השנתי. הטיול יוצא מחר בבוקר, וההורים שלכם לא יהיו בבית עד מאוחר בלילה. אתם יודעים שאתם יכולים לנסות לזייף את החתימה של אמא, ויש סיכוי שהמורה לא תשים לב.",
        options: [
            { text: "לזייף את החתימה כדי לא להפסיד את הטיול", value: "forge" },
            { text: "לא לזייף ולהודות למורה על הבעיה", value: "confess" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין פתרון קצר טווח לבין שמירה על יושר.</p>
        <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-red-800 mb-2">⚠️ סיכון נגד יושר:</h4>
            <p><strong>לזייף:</strong> סיכוי להגיע לטיול, אבל סיכון של עונש חמור אם יתפסו</p>
            <p><strong>לא לזייף:</strong> הפסדת הטיול, אבל שמירה על האמון והיושר</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: זיוף חתימה הוא מעשה רמאות חמור. גם אם לא יתפסו אתכם, אתם מרגילים את עצמכם לפתור בעיות דרך שקר. הטיול יעבור, אבל הפגיעה באמינות יכולה להישאר לזמן רב.</p>`
    },
    {
        id: 14,
        title: "הדעה הלא פופולרית",
        scenario: "במהלך דיון בכיתה על איכות הסביבה, כל התלמידים מביעים דעה מסוימת שפופולרית מאוד. אתם חושבים בדיוק ההפך, ויש לכם נימוקים טובים, אבל אתם חוששים להיות היחידים שחושבים אחרת ושכולם יצחקו עליכם.",
        options: [
            { text: "לשתוק כדי לא להיות שונים מכולם", value: "stay_quiet" },
            { text: "להביע את דעתי למרות שהיא לא פופולרית", value: "speak_up" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין נוחות חברתית לבין תרומה לדיון.</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">🗣️ מגוון דעות:</h4>
            <p><strong>לשתוק:</strong> נוח חברתית, אבל הדיון חד-צדדי</p>
            <p><strong>להביע דעה:</strong> אי נוחות זמנית, אבל עושר הדיון לכולם</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: דיון אמיתי מתקיים רק כשיש מגוון דעות. התרומה שלכם לדיון עשיר יותר חשובה מהנוחות האישית. חברים אמיתיים יכבדו דעה שונה אם היא מובעת בכבוד.</p>`
    },
    {
        id: 15,
        title: "המחמאה המפוקפקת",
        scenario: "חברה שלכם הסתפרה, והתספורת החדשה ממש לא יפה בעיניכם. היא ניגשת אליכם ושואלת בדרך שמראה שהיא לא בטוחה בעצמה: 'נו, איך יצא? הגדתי או שיצא לי נורא?' אתם יכולים לראות שהיא מחפשת עידוד.",
        options: [
            { text: "לומר את האמת: 'האמת, לא כל כך אהבתי'", value: "honest" },
            { text: "לומר 'שקר לבן': 'וואו, מהמם לך!'", value: "white_lie" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין אמת מכאיבה לבין חמלה.</p>
        <div class="bg-pink-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-pink-800 mb-2">💝 אמת נגד רחמים:</h4>
            <p><strong>אמת כואבת:</strong> יכולה לפגוע ברגשותיה ולהוריד את הביטחון העצמי</p>
            <p><strong>'שקר לבן':</strong> מחזק את הביטחון שלה ותורם לרווחה הרגשית</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: לפעמים חמלה חשובה יותר מאמת גולמית. כשמישהו זקוק לעידוד ולא לביקורת, עדיף לבחור במילים שיעודדו ויחזקו.</p>`
    },
    {
        id: 16,
        title: "חלוקת הפיצה הלא שווה",
        scenario: "אתם שלושה חברים שהזמנתם יחד פיצה עם 8 משולשים. אתם שילמתם חלק שווה, אבל אחד החברים, יונתן, אכל רק משולש אחד כי הוא לא היה רעב. עכשיו נשארו 5 משולשים, ואתם שניים עדיין רעבים. איך מחלקים את השאר?",
        options: [
            { text: "לחלק שווה - כל אחד מקבל עוד משולש אחד ו-2/3", value: "equal_split" },
            { text: "לתת ליונתן רק משולש אחד נוסף ולחלק את השאר בינינו", value: "need_based" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין צדק פורמלי לצדק מעשי.</p>
        <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-orange-800 mb-2">⚖️ סוגי צדק:</h4>
            <p><strong>צדק פורמלי:</strong> כולם שילמו שווה, כולם מקבלים שווה</p>
            <p><strong>צדק מעשי:</strong> חלוקה לפי צורך - מי רעב יותר מקבל יותר</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: הדרך הטובה ביותר היא לשאול את יונתן מה הוא מעדיף. אם הוא לא רעב, הוא אולי יסכים לחלוקה לפי צורך. התוצאה הטובה ביותר היא כשכולם מרגישים שהחלוקה הוגנת.</p>`
    },
    {
        id: 17,
        title: "הכלב האהוב של סבתא",
        scenario: "הכלב הזקן של סבתא, מקס, חולה מאוד. הווטרינר אמר בסוד להורים שלמקס נשארו רק שבועות ספורים לחיות, ושהוא עלול לסבול מכאבים. סבתא אוהבת את מקס יותר מכל דבר אחר, והאמת תשבור את ליבה. ההורים מתלבטים האם לספר לה.",
        options: [
            { text: "לספר לסבתא את האמת כדי שתוכל להתכונן", value: "tell_truth" },
            { text: "לא לספר כדי לא לגרום לה צער מיותר", value: "protect_her" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין כאב מיידי לכאב עתידי.</p>
        <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-purple-800 mb-2">💔 ניהול כאב:</h4>
            <p><strong>לספר עכשיו:</strong> כאב מיידי, אבל הזדמנות להיפרד כראוי</p>
            <p><strong>לא לספר:</strong> שמירה על האושר הנוכחי, אבל הלם גדול יותר בעתיד</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: לרוב עדיף כאב מבוקר עכשיו מאשר הלם פתאומי בעתיד. הדרך הטובה ביותר היא לספר בעדינות ולתמוך בסבתא בזמן הקשה הזה.</p>`
    },
    {
        id: 18,
        title: "המתיחה הלא תמימה",
        scenario: "החברים שלכם רוצים לעשות 'מתיחה' לתלמיד ביישן בכיתה – להחביא לו את התיק עד סוף היום ולראות איך הוא מתבלבל. הם אומרים שזה יהיה מצחיק ולא יפגע בו באמת. אתם חושבים שזה אולי יצחיק אתכם, אבל הילד השני יהיה מודאג ומבוהל מאוד.",
        options: [
            { text: "להשתתף במתיחה - זה רק כיף תמים", value: "participate" },
            { text: "לסרב ולנסות לשכנע את החברים לוותר", value: "refuse_convince" }
        ],
        analysis: `<h3 class="text-xl font-bold mb-3 text-purple-800">🤔 ניתוח הדילמה</h3>
        <p class="mb-4">זוהי דילמה בין כיף קבוצתי לבין רגישות לאחר.</p>
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-yellow-800 mb-2">😢 השפעה על הקרבן:</h4>
            <p><strong>להשתתף:</strong> הנאה קצרה לכם, דאגה וביוש לתלמיד</p>
            <p><strong>לסרב:</strong> אולי אי נוחות עם החברים, אבל מניעת פגיעה באדם אחר</p>
        </div>
        <p class="text-green-700 font-medium">💡 הלקח: 'מתיחות' שגורמות לאדם אחר דאגה או ביוש הן לא כיף אלא פגיעה. הכיף הקצר שלכם לא שווה את הכאב הארוך של מישהו אחר.</p>`
    }
];

// משתני מצב גלובליים
let currentDilemmaIndex = 0;
let userChoices = {};

// פונקציות עזר לעיצוב
function getBorderColor(index) {
    const colors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-pink-500', 'border-yellow-500', 'border-red-500', 'border-indigo-500'];
    return colors[index % colors.length];
}

function getDilemmaEmoji(index) {
    const emojis = ['🚂', '🎭', '📚', '🎨', '🍫', '💰', '📝', '🎲', '⚖️', '🔍'];
    return emojis[index % emojis.length];
}

function getStatusBadge(dilemmaId) {
    return userChoices[dilemmaId] ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
}

// פונקציה להצגת התפריט הראשי
function showMainMenu() {
    const content = `
        <div class="text-center mb-8">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h2 class="text-3xl font-bold text-white mb-4">🎯 בחרו דילמה לחקור!</h2>
                <p class="text-white/90 text-lg">
                    כל דילמה תאתגר אתכם לחשוב על מה נכון ומה לא, ותעזור לכם להבין איך לקבל החלטות חכמות בחיים
                </p>
            </div>
        </div>

        <!-- כפתורי פעולה מהירה -->
        <div class="flex flex-wrap gap-4 justify-center mb-8">
            <button onclick="showRandomDilemma()" 
                    class="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                🎲 דילמה אקראית
            </button>
            <button onclick="showProgress()" 
                    class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                📊 ההתקדמות שלי
            </button>
        </div>

        <!-- רשת הדילמות -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${dilemmas.map((dilemma, index) => `
                <div class="card-enter bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-r-4 ${getBorderColor(index)}"
                     onclick="showDilemma(${index})">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-2xl">${getDilemmaEmoji(index)}</span>
                        <span class="text-sm font-semibold px-3 py-1 rounded-full ${getStatusBadge(dilemma.id)}">
                            ${userChoices[dilemma.id] ? 'הושלם ✓' : 'חדש'}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">${dilemma.title}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        ${dilemma.scenario.substring(0, 120)}...
                    </p>
                    <div class="mt-4 text-blue-600 font-semibold text-sm">
                        לחצו לחקור את הדילמה ←
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- סטטיסטיקות -->
        <div class="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <h3 class="text-2xl font-bold text-white mb-4">📈 הסטטיסטיקות שלכם</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white/20 rounded-lg p-4">
                    <div class="text-3xl font-bold text-white">${Object.keys(userChoices).length}</div>
                    <div class="text-white/80">דילמות פתרתם</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4">
                    <div class="text-3xl font-bold text-white">${dilemmas.length}</div>
                    <div class="text-white/80">סה"כ דילמות</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4">
                    <div class="text-3xl font-bold text-white">${Math.round((Object.keys(userChoices).length / dilemmas.length) * 100)}%</div>
                    <div class="text-white/80">אחוז השלמה</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('main-content').innerHTML = content;
}

// פונקציה להצגת דילמה בודדת
function showDilemma(index) {
    currentDilemmaIndex = index;
    const dilemma = dilemmas[index];
    const hasAnswered = userChoices[dilemma.id];
    
    const content = `
        <!-- ניווט עליון -->
        <div class="flex flex-wrap gap-4 justify-between items-center mb-8">
            <button onclick="showMainMenu()" 
                    class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                ← חזרה לתפריט
            </button>
            <div class="flex gap-2">
                <button onclick="showRandomDilemma()" 
                        class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    🎲 אקראית
                </button>
                <button onclick="showNextDilemma()" 
                        class="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    הבאה →
                </button>
            </div>
        </div>

        <!-- כרטיס הדילמה -->
        <div class="card-enter bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div class="text-center mb-8">
                <span class="text-6xl mb-4 block">${getDilemmaEmoji(index)}</span>
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${dilemma.title}</h1>
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-r-4 border-blue-500">
                    <p class="text-lg text-gray-700 leading-relaxed">${dilemma.scenario}</p>
                </div>
            </div>

            <!-- אפשרויות בחירה -->
            <div class="space-y-4 mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">🤔 מה הייתם עושים?</h3>
                ${dilemma.options.map((option, optionIndex) => `
                    <button onclick="selectOption('${option.value}')" 
                            id="option-${option.value}"
                            class="option-button w-full p-6 text-right rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 ${hasAnswered && userChoices[dilemma.id] === option.value ? 'option-selected' : ''} ${hasAnswered && userChoices[dilemma.id] !== option.value ? 'option-disabled' : 'bg-white hover:bg-blue-50'}">
                        <div class="flex items-center justify-between">
                            <span class="text-2xl">${['A', 'B', 'C', 'D'][optionIndex]}</span>
                            <span class="text-lg font-semibold flex-1 mr-4">${option.text}</span>
                            ${hasAnswered && userChoices[dilemma.id] === option.value ? '<span class="text-green-600">✓ בחרתם</span>' : ''}
                        </div>
                    </button>
                `).join('')}
            </div>

            <!-- אזור הניתוח -->
            <div id="analysis-area" class="hidden">
                <div class="analysis-enter bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-r-4 border-green-500">
                    ${dilemma.analysis}
                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                        <button onclick="showMainMenu()" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                            📋 חזרה לרשימה
                        </button>
                        <button onclick="showNextDilemma()" 
                                class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                            ➡️ דילמה הבאה
                        </button>
                        <button onclick="showRandomDilemma()" 
                                class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                            🎲 דילמה אקראית
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- אינדיקטור התקדמות -->
        <div class="mt-8 text-center">
            <div class="bg-white/20 rounded-full h-3 max-w-md mx-auto mb-2">
                <div class="bg-white rounded-full h-3 transition-all duration-500" 
                     style="width: ${((index + 1) / dilemmas.length) * 100}%"></div>
            </div>
            <p class="text-white/80">דילמה ${index + 1} מתוך ${dilemmas.length}</p>
        </div>
    `;
    
    document.getElementById('main-content').innerHTML = content;
    
    // אם כבר ענו על הדילמה, להציג את הניתוח
    if (hasAnswered) {
        showAnalysis();
    }
}

// פונקציה לטיפול בבחירת אפשרות
function selectOption(selectedValue) {
    const dilemma = dilemmas[currentDilemmaIndex];
    
    // שמירת הבחירה
    userChoices[dilemma.id] = selectedValue;
    
    // עדכון עיצוב הכפתורים
    dilemma.options.forEach(option => {
        const button = document.getElementById(`option-${option.value}`);
        button.classList.remove('option-selected');
        button.classList.add('option-disabled');
        
        if (option.value === selectedValue) {
            button.classList.remove('option-disabled');
            button.classList.add('option-selected');
            button.innerHTML = button.innerHTML.replace('✓ בחרתם', '') + ' <span class="text-green-600">✓ בחרתם</span>';
        }
    });
    
    // הצגת הניתוח
    showAnalysis();
}

// פונקציה להצגת הניתוח
function showAnalysis() {
    const analysisArea = document.getElementById('analysis-area');
    analysisArea.classList.remove('hidden');
    analysisArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// פונקציה לדילמה אקראית
function showRandomDilemma() {
    const randomIndex = Math.floor(Math.random() * dilemmas.length);
    showDilemma(randomIndex);
}

// פונקציה לדילמה הבאה
function showNextDilemma() {
    const nextIndex = (currentDilemmaIndex + 1) % dilemmas.length;
    showDilemma(nextIndex);
}

// פונקציה להצגת התקדמות
function showProgress() {
    const completedCount = Object.keys(userChoices).length;
    const progressPercentage = Math.round((completedCount / dilemmas.length) * 100);
    
    const content = `
        <div class="max-w-4xl mx-auto">
            <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">📊 ההתקדמות שלכם</h1>
                    <div class="text-6xl mb-4">${progressPercentage === 100 ? '🏆' : '📈'}</div>
                </div>

                <!-- סטטיסטיקות מרכזיות -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                        <div class="text-3xl font-bold mb-2">${completedCount}</div>
                        <div class="text-blue-100">דילמות פתרתם</div>
                    </div>
                    <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
                        <div class="text-3xl font-bold mb-2">${progressPercentage}%</div>
                        <div class="text-green-100">אחוז השלמה</div>
                    </div>
                    <div class="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
                        <div class="text-3xl font-bold mb-2">${dilemmas.length - completedCount}</div>
                        <div class="text-purple-100">נותרו לפתרון</div>
                    </div>
                </div>

                <!-- בר התקדמות -->
                <div class="mb-8">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-gray-700">התקדמות כללית</span>
                        <span class="text-lg font-bold text-gray-800">${progressPercentage}%</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-6">
                        <div class="bg-gradient-to-r from-blue-500 to-green-500 rounded-full h-6 transition-all duration-1000" 
                             style="width: ${progressPercentage}%"></div>
                    </div>
                </div>

                <!-- רשימת דילמות עם סטטוס -->
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">📝 מצב כל הדילמות</h3>
                    <div class="grid grid-cols-1 gap-3">
                        ${dilemmas.map((dilemma, index) => `
                            <div class="flex items-center justify-between p-4 rounded-lg ${userChoices[dilemma.id] ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'} border">
                                <div class="flex items-center">
                                    <span class="text-2xl ml-3">${getDilemmaEmoji(index)}</span>
                                    <span class="font-semibold text-gray-800">${dilemma.title}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="px-3 py-1 rounded-full text-sm font-semibold ${userChoices[dilemma.id] ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'}">
                                        ${userChoices[dilemma.id] ? 'הושלם ✓' : 'לא פתור'}
                                    </span>
                                    <button onclick="showDilemma(${index})" 
                                            class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-all duration-300">
                                        ${userChoices[dilemma.id] ? 'צפייה' : 'פתרון'}
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- כפתורי פעולה -->
                <div class="text-center space-x-4">
                    <button onclick="showMainMenu()" 
                            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                        🏠 חזרה לעמוד הראשי
                    </button>
                    ${completedCount < dilemmas.length ? `
                        <button onclick="showRandomDilemma()" 
                                class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                            🎲 דילמה אקראית
                        </button>
                    ` : `
                        <div class="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p class="text-yellow-800 font-semibold">🎉 מזל טוב! סיימתם את כל הדילמות!</p>
                            <p class="text-yellow-700">אתם יכולים לחזור ולעיין בדילמות שפתרתם כדי לחזק את הידע</p>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('main-content').innerHTML = content;
}

// אתחול האתר בטעינה
document.addEventListener('DOMContentLoaded', function() {
    showMainMenu();
}); 