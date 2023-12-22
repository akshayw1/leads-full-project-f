import React, { useEffect, useState } from 'react';
import { formatTitle } from '../../utils/format';
import StripeCheckout from 'react-stripe-checkout';
import axios from '../../redux/app/customAxios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Plan = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}/plans`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleToken = async (token, plan) => {
    try {
      console.log('Sending request with token:', token);
      const response = await axios.post(
        `${baseUrl}/subscription/subscribe-plan/${plan._id}`,
        {
          token: token.id,
          amount: plan.price * 100,
        }
      );
      toast.success(response.data.message);
      navigate('/');
      return response;
    } catch (error) {
      console.error('There was an error!', error);
      toast.error('Payment failed');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center mt-5">
        Subscribe to access the leads features
      </h1>
      <div className="flex flex-wrap gap-4">
        {plans &&
          plans.data.map((plan) => (
            <div
              key={plan._id}
              className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800"
            >
              <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
                {formatTitle(plan.name)}
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                ${plan.price}
                <span className="text-sm text-gray-300">/ month</span>
              </p>
              <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
                For personal use and gain experience on how leads work.
              </p>
              <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                <li className="mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Free Access to applications
                </li>
                <li className="mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  {plan.searchQueriesPerDay} Search Queries per day
                </li>
                <li className="mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  {plan.leadsPerDay} leads from Queries per day
                </li>
              </ul>
              <StripeCheckout
                token={({ id }) => handleToken({ token: id }, plan)}
                stripeKey={
                  'pk_test_51OAsDhSIhKUUNQyAKiAnTgKHpCYAyIOK0QxuCrmII0YaAbz74MwxUVmTc8MqsMhEz8JVOIMUxtBsKEs40SYs8Q6l007Tdcak4o'
                }
                name={formatTitle(plan.name)}
                description={`Subscription for ${formatTitle(plan.name)}`}
                amount={plan.price * 100}
                currency="inr"
              >
                <button
                  type="button"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Choose plan
                </button>
              </StripeCheckout>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Plan;
