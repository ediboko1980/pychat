import random

from chat import local
from chat.log_filters import id_generator
from django.conf import settings
from chat.utils import get_client_ip


def create_id(user_id, random=None):
	if user_id is None:
		user_id = 0
	if not random or len(random) != settings.WS_ID_CHAR_LENGTH:
		random = id_generator(settings.WS_ID_CHAR_LENGTH)
	return "{:04d}:{}".format(user_id, random), random


class RandomMiddleware(object):
	"""
	Middleware to set user cookie
	If user is authenticated and there is no cookie, set the cookie,
	If the user is not authenticated and the cookie remains, delete it
	"""

	def process_request(self, request):
		try:
			local.random
		except AttributeError:
			local.random = create_id(getattr(request.user, 'id'))[0]
			local.client_ip = get_client_ip(request)
