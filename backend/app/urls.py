from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

# To keep it clean we define an api_patterns list here, and include the url.pys from various apps
api_patterns = [
    path('users/', include('app.users.urls')),
    path('social/', include('app.social.urls')),
    path('auth/', include('app.registration.urls')),

    path('docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),

]

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    # here we use the api_patterns we defined above and include it in our main endpoint
    path('backend/api/', include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
