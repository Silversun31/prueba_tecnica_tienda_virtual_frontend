import productUrls from "@/app/product/urls";
import cartUrls from "@/app/cart/urls";

export const urlpatterns = {
    'index': '/',
    ...productUrls,
    ...cartUrls
}