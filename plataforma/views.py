from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.contrib.auth.models import User
#from principal.forms import ContactoForm, NuevoUsuarioForm
#from django.contrib.auth.forms import UserCreationForm
#from django.contrib.auth.forms import AuthenticationForm
#from django.contrib.auth import login, authenticate, logout
#from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
#from django.core.mail import EmailMessage
#from django.contrib.admin.views.decorators import staff_member_required
#from django.core.mail import send_mail

def switch_to_English_link(request):
    request.session['lang'] = 'en'
    return HttpResponseRedirect('/')

def switch_to_Spanish_link(request):
    request.session['lang'] = 'es'
    return HttpResponseRedirect('/')

def home(request):
	return render_to_response('home.html', context_instance=RequestContext(request))

def browse(request):
	return render_to_response('browse.html', context_instance=RequestContext(request))

def share(request):
	return render_to_response('share.html', context_instance=RequestContext(request))

def top(request):
	return render_to_response('top.html', context_instance=RequestContext(request))

def search(request):
	return render_to_response('search.html', context_instance=RequestContext(request))

def login(request):
	if request.user.is_authenticated():
		return HttpResponseRedirect('/')
	else:
		return render_to_response('login.html', context_instance=RequestContext(request))

def signup(request):
	if request.user.is_authenticated():
		return HttpResponseRedirect('/')
	else:
		return render_to_response('signup.html', context_instance=RequestContext(request))

def forum(request):
	return render_to_response('forum.html', context_instance=RequestContext(request))

def help(request):
	return render_to_response('help.html', context_instance=RequestContext(request))

def privacy(request):
	return render_to_response('privacy.html', context_instance=RequestContext(request))

def about(request):
	return render_to_response('about.html', context_instance=RequestContext(request))

def contact(request):
	return render_to_response('contact.html', context_instance=RequestContext(request))