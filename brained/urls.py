from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'plataforma.views.home', name='home'),
    url(r'^browse/$','plataforma.views.browse'),
    url(r'^share/$','plataforma.views.share'),
    url(r'^top/$','plataforma.views.top'),
    url(r'^search/$','plataforma.views.search'),
    url(r'^login/$','plataforma.views.login'),
    url(r'^signup/$','plataforma.views.signup'),
    url(r'^forum/$','plataforma.views.forum'),
    url(r'^help/$','plataforma.views.help'),
    url(r'^privacy/$','plataforma.views.privacy'),
    url(r'^about/$','plataforma.views.about'),
    url(r'^contact/$','plataforma.views.contact'),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
	url(r'^admin/', include(admin.site.urls)),
	url(r'^en/$','plataforma.views.switch_to_English_link'),
	url(r'^es/$','plataforma.views.switch_to_Spanish_link'),
	url(r'^exit/$', 'plataforma.views.exit'),
)
