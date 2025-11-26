import { StepType, FlowStep } from './types';

export const FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    title: "רעיונאות (Ideation)",
    description: "יצירת מאגר רעיונות ראשוני עבור העסק.",
    technicalDetails: "יש לגשת ל-ChatGPT, להזין פסקה קצרה המתארת את העסק הקטן/בינוני (SMB), ולבקש 10 רעיונות שונים ויצירתיים ליצירת סרטון שיווקי.",
    tools: ["ChatGPT", "Claude", "Gemini"],
    type: StepType.COMMON,
    iconName: "BrainCircuit"
  },
  {
    id: 2,
    title: "סינון ובחירה אנושית",
    description: "בחירת הרעיון הטוב ביותר לביצוע.",
    technicalDetails: "יש לבחור רעיון אחד על בסיס שני קריטריונים: א. היתכנות טכנולוגית (האם כלי הוידאו הנוכחיים מסוגלים לייצר זאת?). ב. העדפה אישית ותחושת בטן לגבי הצלחת הסרטון.",
    tools: ["Human Intelligence"],
    type: StepType.COMMON,
    iconName: "UserCheck"
  },
  {
    id: 3,
    title: "אופציה א': טקסט לוידאו",
    description: "מסלול מהיר לרעיונות פשוטים.",
    technicalDetails: "שימוש ב-ChatGPT ליצירת פרומפט מדויק ומפורט. את הפרומפט מזינים ישירות למחוללי וידאו כדי לקבל תוצר סופי.",
    tools: ["ChatGPT", "Veo3", "Kling", "Runway Gen-3"],
    type: StepType.OPTION_A,
    iconName: "Wand2"
  },
  {
    id: 4,
    title: "יצירת תמונות בסיס",
    description: "הכנת חומרים ויזואליים למסלול המורכב.",
    technicalDetails: "יצירת תמונות סטטיות איכותיות ב-Midjourney. מומלץ להשתמש בתמונות מוצר קיימות אם יש, ורק להשלים את החסר בעזרת AI.",
    tools: ["Midjourney v6", "Photoshop AI"],
    type: StepType.OPTION_B,
    iconName: "Image"
  },
  {
    id: 5,
    title: "עיצוב דמות (אופציונלי)",
    description: "אם הסרטון דורש דמות עקבית מונפשת.",
    technicalDetails: "שימוש בכלי כמו Astria או LoRA לאימון מודל על דמות ספציפית כדי לשמור על עקביות בין הפריימים השונים.",
    tools: ["Astria.ai", "Leonardo.ai"],
    type: StepType.OPTION_B,
    iconName: "Smile"
  },
  {
    id: 6,
    title: "בניית פריימים",
    description: "יצירת הסטוריבורד הויזואלי.",
    technicalDetails: "יצירה של 1-3 פריימים מרכזיים (Keyframes) המייצגים את הסצנות החשובות בוידאו. אלו ישמשו כעוגן להנפשה.",
    tools: ["Midjourney", "Magnific (Upscaling)"],
    type: StepType.OPTION_B,
    iconName: "Layers"
  },
  {
    id: 7,
    title: "הנפשת תמונה לוידאו",
    description: "הפיכת התמונות הסטטיות לסרטון חי.",
    technicalDetails: "כתיבת פרומפט לכל פריים והזנתו יחד עם התמונה (Image-to-Video) למחוללי הוידאו המתקדמים.",
    tools: ["Veo3", "Kling", "Runway Gen-3"],
    type: StepType.OPTION_B,
    iconName: "Clapperboard"
  }
];
