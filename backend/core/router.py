from rest_framework.routers import DefaultRouter
from clientes.views import ClienteViewSet  # ← Debería ser así (sin "backend.")

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)